import React from "react";
import { Col, Row } from "react-bootstrap";

function MyNav() {
  return (
    <Row>
      <Col xs={9} lg={{ span: 11 }} className="mainLinks d-none d-md-flex">
        <a href="#" class="text-uppercase">
          trending
        </a>
        <a href="#" class="text-uppercase">
          podcast
        </a>
        <a href="#" class="text-uppercase">
          moods and genres
        </a>
        <a href="#" class="text-uppercase">
          new releases
        </a>
        <a href="#" class="text-uppercase">
          discover
        </a>
      </Col>
    </Row>
  );
}

export { MyNav };
