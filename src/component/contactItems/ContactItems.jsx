import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const ContactItems = ({ item }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="contact-items-contain">
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
      <Modal />
    </div>
  );
};

function Modal() {
  return (
    <div className="seemore-contain">
      <div className="seemore-wrap">
        <div>수정하기</div>
        <div>삭제하기</div>
      </div>
    </div>
  );
}
export default ContactItems;
