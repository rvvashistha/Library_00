import React, { useEffect, useState } from "react";
import { getLibraries } from "../../services/libraries";
import Spinner from "react-bootstrap/esm/Spinner";
import Alert from "react-bootstrap/esm/Alert";
import ILibrary from "../../models/ILibrary";
import LibraryListItem from "./LibraryListItem/LibraryListItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Col, Row } from "react-bootstrap";

const LibrarieList = () => {
  const [libraries, setlibraries] = useState<ILibrary[]>([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState<null | Error>(null);

  useEffect(() => {
    const helper = async () => {
      try {
        const libraries = await getLibraries();
        setTimeout(() => {
          setlibraries(libraries);
          setloading(false);
        }, 400);
        //   console.log(libraries);
      } catch (error) {
        seterror(error as Error);
        setloading(false);
      }
    };

    helper();
  }, []);

  return (
    <div>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && error && <Alert variant="danger">(error.message)</Alert>}
      {!loading && !error && (
        <Row xs={2} lg={3}>
          {libraries?.map((library) => (
            <Col key={library.id} className="my-3">
              <LibraryListItem library={library}></LibraryListItem>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default LibrarieList;
