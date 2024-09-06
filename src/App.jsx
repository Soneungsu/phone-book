import { useDispatch, useSelector } from "react-redux";
import Navbar from "./component/Navbar/Navbar.jsx";
import ContactForm from "./component/contact/ContactForm.jsx";
import ContactList from "./component/contactList/ContactList.jsx";
import "./global.scss";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <ContactForm />
    </>
  );
}

export default App;
