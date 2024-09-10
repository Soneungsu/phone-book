import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const ContactItems = ({ item }) => {
  return (
    <div className="contact-items-wrap">
      <div className="contact-items">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="user-image"
          width={40}
        />
        <div>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </div>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faEllipsis} className="see-more" />
        </p>
      </div>
    </div>
  );
};

export default ContactItems;
