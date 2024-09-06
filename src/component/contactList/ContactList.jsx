import React from "react";
import ContactItems from "../contactItems/ContactItems";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <>
      {contactList.map((item) => (
        <ContactItems />
      ))}
    </>
  );
};

export default ContactList;
