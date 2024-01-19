import { setSearchResult } from "../reducers/stateReducer";
export const fetchSearch = (searchQuery) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "59d4c99753msh78ad53efec66216p196072jsnf7e088b75eb8",
      },
    });

    if (response.ok) {
      const { data } = await response.json();
      dispatch(setSearchResult(data));
    } else {
      dispatch(setSearchResult(null));
      throw new Error("Retrieving data error");
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};
