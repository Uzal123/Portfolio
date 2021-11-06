import { useState } from "react";
import "./contact.scss"

export default function Contact() {
    const [message,setMessage]= useState(false)

    const handleSumbit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" srcset="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSumbit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"/>
                    <button type="submit">Send</button>
                    {message && <span>I am not replying you.</span>}
                </form>
            </div>
        </div>
    )
}
