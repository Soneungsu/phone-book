import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const ContactItems = ({ item }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const deleted = () => {
    // console.log("gg");
    dispatch({ type: "DELETED_CONTACT", payload: item.id });
  };

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
          {modal ? (
            <p className="seemore-wrap">
              <FontAwesomeIcon
                icon={faCircleMinus}
                className="deleted-btn"
                onClick={deleted}
              />
            </p>
          ) : (
            <p>
              <FontAwesomeIcon
                icon={faEllipsis}
                className="see-more"
                onClick={() => {
                  setModal(true);
                }}
              />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// function Modal({ item, setModal }) {
//   const dispatch = useDispatch();
//   const deleted = (e, id) => {
//     e.preventDefault();
//     dispatch({ type: "DELETE_CONTACT", payload: id });
//   };
//   return (
//     <div className="seemore-contain">
//       <div className="seemore-wrap">
//         <FontAwesomeIcon
//           icon={faCircleMinus}
//           className="deleted-btn"
//           onClick={deleted}
//         />
//       </div>
//     </div>
//   );
// }
export default ContactItems;
