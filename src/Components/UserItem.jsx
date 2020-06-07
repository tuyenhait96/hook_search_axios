import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  CardBody,
} from "reactstrap";

function UserItem({ data }) {
  return (
    <div className="col-md-3 mb-3">
      <Card>
        <CardImg top width="100%" src={data.avatar_url} alt={data.login} />
        <CardBody>
          <CardTitle>{data.login}</CardTitle>
          <a href={`users/${data.login}`} rel="noopener noreferrer">
            <Button>More</Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserItem;
