import React from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";

export default function CardPlate() {
  return (
      <Card      
        className="text-center"
        bg={"light"}
        text={"light" === "light" ? "dark" : "white"}
        style={{ width: "25rem", height: "100%" }}
        className="mb-2"
      >
        <Card.Header
          style={{
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Tạo một thẻ mới</h2>{" "}
        </Card.Header>
        <Card.Body>
          <Card.Title>Hãy điền thông tin thẻ mới</Card.Title>
          <Card.Text>Mặt trước</Card.Text>
          <InputGroup size="lg" className="shadow-lg">
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <Card.Text>Mặt sau</Card.Text>
          <InputGroup size="lg" className="shadow-lg">
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <Button variant="danger" size="lg">
            Lưu thẻ{" "}
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
  );
}
