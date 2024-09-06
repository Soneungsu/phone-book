import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Modal = ({ setModal }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    setModal(false);
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };

  return (
    <div className="modal-contain">
      <div className="modal-wrap">
        <form className="modal-content" onSubmit={addContact}>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="이름을 입력하세요"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="phone">연락처를 입력하세요</label>
          <input
            type="number"
            id="phone"
            value={phoneNumber}
            placeholder="연락처를 입력하세요."
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">추가</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
