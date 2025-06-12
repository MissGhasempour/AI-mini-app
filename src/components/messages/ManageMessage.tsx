import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../../css/message.module.css'

export default function ManageMessage() {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [AIMessage, setAIMessage] = useState("");
  const navigate = useNavigate(); 

  //console.log(localStorage.getItem("signedIn"));

  const handleSubmit = () => {
    if (localStorage.getItem("signedIn")) {
      setShowMessage(message);
      setAIMessage("Awesome, glad you release a comment");
    }else {
        navigate("/login")
    }
  };

  return (
    <div className={style.body}>
      <textarea
        name="message"
        id="msg"
        placeholder="write your message ..."
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
        className={style.textarea}
      ></textarea>
      <br />
      <button onClick={handleSubmit} className={style.submit}>Submit</button>
      <p>{showMessage}</p>
      <p>{AIMessage}</p>
    </div>
  );
}
