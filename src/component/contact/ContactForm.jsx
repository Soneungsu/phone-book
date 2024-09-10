import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Modal from "../modal/Modal";
import { SearchBox } from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";

const ContactForm = () => {
  const [modal, setModal] = useState(false);
  const [handleSearch, sethandleSearch] = useState("");

  const contactListModal = (e) => {
    e.preventDefault();
    // console.log(modal);
    setModal(!modal);
  };

  const user = (term) => {
    sethandleSearch(term);
  };

  return (
    <div className="form-container">
      {modal === true ? <Modal setModal={setModal} /> : null}
      <div className="form-wrap">
        <Navbar />
        <SearchBox onSearch={user} />
        <ContactList handleSearch={handleSearch} />
        <button className="add-btn" onClick={contactListModal}>
          +
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
