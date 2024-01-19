import "./assets/css/cust-btsp.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { SideBar } from "./components/SideBar";
import { Main } from "./components/Main";
import Player from "./components/Player";
import { Playlist } from "./components/Playlist";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container fluid className=" mb-5">
                <Row>
                  <SideBar />
                  <Main />
                </Row>
              </Container>
              <Player />
            </>
          }
        />
        <Route
          path="/playlist"
          element={
            <>
              <Container fluid className=" mb-5">
                <Row>
                  <SideBar />
                  <Playlist />
                </Row>
              </Container>
              <Player />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
