import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row className="g-4">
        <Spinner
          animation="border"
          variant="danger"
          className={loading ? "d-block" : "d-none"}
        />
        {users.map((user) => {
          console.log(user);
          return (
            <Col key={users.id} sm={6} md={4} lg={2}>
              <UserCard
                image={user.avatar_url}
                name={user.login}
                url={user.html_url}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default UserCards;
