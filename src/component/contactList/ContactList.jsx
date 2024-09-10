import React from "react";
import { useSelector } from "react-redux";
import ContactItems from "../contactItems/ContactItems";

const ContactList = ({ handleSearch }) => {
  const contactList = useSelector((state) => state.contactList);
  const filteredList = contactList.filter((item) => {
    return (
      item.name.toLowerCase().includes(handleSearch.toLowerCase()) ||
      item.phoneNumber.includes(handleSearch)
    );
  });
  return (
    <>
      {filteredList.map((item, index) => (
        <ContactItems key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
