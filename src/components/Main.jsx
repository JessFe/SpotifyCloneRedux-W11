import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MyNav } from "./MyNav";
import { Gallery } from "./Gallery";
import { useSelector } from "react-redux";
import { SearchResult } from "./SearchResult";

function Main() {
  const [fetchedData, setFetchedData] = useState(null);
  const searchedQuery = useSelector((state) => state.global.searchResult);

  const handleSection = async (artistName) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "59d4c99753msh78ad53efec66216p196072jsnf7e088b75eb8",
        },
      });
      if (response.ok) {
        let { data } = await response.json();
        setFetchedData((prevData) => ({ ...prevData, [artistName]: data }));
      } else {
        throw new Error("Songs' fetch error");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    handleSection("blacksabbath");
    handleSection("metallica");
    handleSection("sexpistols");
    handleSection("linkinpark");
    handleSection("abba");
  }, []);

  return (
    <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
      <MyNav />
      <Row>
        <Col xs={10}>
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </Col>
      </Row>
      {searchedQuery && <SearchResult category="Search Result" songsInfo={searchedQuery} />}
      {fetchedData &&
        fetchedData.blacksabbath &&
        fetchedData.metallica &&
        fetchedData.sexpistols &&
        fetchedData.linkinpark &&
        fetchedData.abba && (
          <div className=" mb-5">
            <Gallery category={"Rock Classics"} songsInfo={fetchedData.blacksabbath} />
            <Gallery category={"Metal"} songsInfo={fetchedData.metallica} className=" mb-5" />
            <Gallery category={"Punk"} songsInfo={fetchedData.sexpistols} className=" mb-5" />
            <Gallery category={"Nu-metal"} songsInfo={fetchedData.linkinpark} className=" mb-5" />
            <Gallery category={"Pop Culture"} songsInfo={fetchedData.abba} />
          </div>
        )}
    </Col>
  );
}

export { Main };
