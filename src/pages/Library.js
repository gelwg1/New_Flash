import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import ChangeCardPopup from "../components/ChangeCardPopup";
import { Button } from "react-bootstrap";

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
    <div>
      {cards.map((card) => {
        return (
          <div
            style={{
              width: "600px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2>{card.front}</h2>
            <h2>{card.back}</h2>
            <ChangeCardPopup id={card.id} front={card.front} back={card.back} />
            <Button
              onClick={() => {
                deleteUser(card.id);
              }}
            >
              Xóa thẻ
            </Button>
          </div>
        );
      })}
    </div>
  );
}
