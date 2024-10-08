import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Modal = ({ setModal }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();

    if (name.trim() === "" || phoneNumber.trim() === "") {
      alert("이름 또는 전화번호를 입력해주세요");
      setModal(true);
      return;
    }
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
    setModal(false);
  };

  //예외처리

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
