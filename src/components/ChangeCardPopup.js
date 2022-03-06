import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ChangeCardPopup({ id, front, back }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  const changeCard = (front, back) => {
    handleShow();
    setCardBack(back);
    setCardFront(front);
  };

  const updateCard = async (id, front, back) => {
    handleClose();
    const userDoc = doc(db, "Cards", id);
    const newField = { front: front, back: back };
    await updateDoc(userDoc, newField);
  };

  return (
    <>
      <Button
        onClick={() => {
          changeCard(front, back);
        }}
      >
        Sửa thẻ
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa dữ liệu của thẻ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mặt trước </Form.Label>
              <Form.Control
                type="text"
                value={cardFront}
                onChange={(e) => {
                  setCardFront(e.target.value);
                }}
              />
              <Form.Label>Mặt sau </Form.Label>
              <Form.Control
                type="text"
                value={cardBack}
                onChange={(e) => {
                  setCardBack(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              updateCard(id, cardFront, cardBack);
            }}
          >
            Update thẻ
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
