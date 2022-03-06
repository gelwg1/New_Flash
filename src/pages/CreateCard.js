import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function CreateCard() {
  const [newCardFront, setNewCardFront] = useState("");
  const [newCardBack, setNewCardBack] = useState("");

  const usersCollectionRef = collection(db, "Cards")
  const createCard = async ()=>{
    setNewCardFront("")
    setNewCardBack("")    
    await addDoc(usersCollectionRef, {front: newCardFront, back: newCardBack})    
  }

  return (
    <div>
      <input placeholder="front text" value={newCardFront} onChange={(e)=>setNewCardFront(e.target.value)} />
      <input placeholder="back text" value={newCardBack} onChange={(e)=>setNewCardBack(e.target.value)} />
      <button onClick={createCard}>Create new card</button>
    </div>
  )
}
