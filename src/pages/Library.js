import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import ChangeCardPopup from "../components/ChangeCardPopup";
import { Button, Card } from "react-bootstrap";

export default function Library() {
  const [cards, setCards] = useState([]);

  const deleteUser = async (id) => {
    const userDoc = doc(db, "Cards", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    onSnapshot(collection(db, "Cards"), (snapshot) =>
      setCards(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexFlow: "wrap",
      }}
    >
      {cards.map((card) => {
        return (
          <>
            <Card
              className="text-center"
              bg="secondary"
              text="white"
              style={{ width: "30%", margin: "15px 0px" }}
            >
              <Card.Body>
                <Card.Title>Mặt trước </Card.Title>
                <Card.Text>{card.front}</Card.Text>
                <Card.Title>Mặt sau</Card.Title>
                <Card.Text>{card.back}</Card.Text>
              </Card.Body>
              <div
                style={{
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <ChangeCardPopup
                  id={card.id}
                  front={card.front}
                  back={card.back}
                />
                <Button
                  variant="danger"
                  onClick={() => {
                    deleteUser(card.id);
                  }}
                >
                  Xóa thẻ{" "}
                </Button>
              </div>
            </Card>
          </>
        );
      })}
    </div>
  );
}
