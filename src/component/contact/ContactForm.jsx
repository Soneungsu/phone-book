import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Modal from "../modal/Modal";
import { SearchBox } from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";

const ContactForm = () => {
  const [modal, setModal] = useState(false);
  const contactListModal = (e) => {
    e.preventDefault();
    // console.log(modal);
    setModal(!modal);
  };
  return (
    <div className="form-container">
      {modal === true ? <Modal setModal={setModal} /> : null}
      <div className="form-wrap">
        <Navbar />
        <div className="serch-container">
          <SearchBox />
        </div>
        <ContactList />
        <button className="add-btn" onClick={contactListModal}>
          +
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
