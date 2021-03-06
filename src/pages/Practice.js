import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { FlashcardComponent } from "../components/FlipCard";

export default function Practice() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "Cards"), (snapshot) =>
      setCards(
        snapshot.docs.map((doc) => ({
          front: { text: doc.data().front },
          back: { text: doc.data().back },
          id: doc.id,
        }))
      )
    );
  }, []);

  return (
    <div class="container" style={{margin:"10px auto"}}>
      <FlashcardComponent dataSource={cards}/>
    </div>
  );
}
