import { useState } from "react"

export default function ManageMessage() {
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState("");
    const [AIMessage, setAIMessage] = useState("");

    const handleSubmit = () => {
        setShowMessage(message);
        setAIMessage("AI response ...");
    }

    return <div>
        <textarea name="message" id="msg" placeholder="write your message ..." rows={4} onChange={(e) => setMessage(e.target.value)}></textarea><br />
        <button onClick={handleSubmit}>Submit</button>
        <p>{showMessage}</p>
        <p>{AIMessage}</p>
    </div>
}
