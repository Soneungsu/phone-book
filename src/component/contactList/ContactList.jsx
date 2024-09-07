import React from "react";
import { useSelector } from "react-redux";
import ContactItems from "../contactItems/ContactItems";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <>
      {contactList.map((item, index) => (
        <ContactItems key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
