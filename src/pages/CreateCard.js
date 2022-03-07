import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";

export default function CreateCard() {
  const [newCardFront, setNewCardFront] = useState("");
  const [newCardBack, setNewCardBack] = useState("");
  const [footer, setFooter] = useState("");

  const usersCollectionRef = collection(db, "Cards");
  const createCard = async () => {
    setNewCardFront("");
    setNewCardBack("");    
    await addDoc(usersCollectionRef, {
      front: newCardFront,
      back: newCardBack,
    });
    setFooter("Đã lưu thẻ thành công");
  };

  return (
    <div style={{textAlign:"center"}}>
        <Card
          className="text-center"
          bg={"light"}
          text={"light" === "light" ? "dark" : "white"}
          style={{ width: "50%", height: "100%", margin : "25px auto" }}
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
            <InputGroup
              size="lg"
              className="shadow-lg"
            >
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={newCardFront}
                onChange={(e) => setNewCardFront(e.target.value)}
              />
            </InputGroup>
            <Card.Text>Mặt sau</Card.Text>
            <InputGroup
              size="lg"
              className="shadow-lg"
            >
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={newCardBack}
              onChange={(e) => setNewCardBack(e.target.value)}
              />
            </InputGroup>
            <Button variant="danger" size="lg" onClick={createCard} style={{marginTop:"30px"}}>
              Lưu thẻ{" "}
            </Button>
          </Card.Body>
          <Card.Footer style={{color:"green"}}>{footer}</Card.Footer>
        </Card>
        </div>
  );
}
