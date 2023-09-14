import React from "react";
import { Card, Button } from "react-bootstrap";
import ILibrary from "../../../models/ILibrary";

type Props = {
  library: ILibrary;
};

const LibraryListItem = ({ library }: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`${process.env.REACT_APP_API_BASE_URL}${library.imageUrl}`}
        alt={library.name}
      />
      <Card.Body>
        <Card.Title className="d-flex align-item-start">
          {library.name}
          <Button size="sm" variant="primary">
            More
          </Button>
        </Card.Title>
        <Card.Text>{library.location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LibraryListItem;
