import React, { useState } from "react";
import { toast } from "react-toastify";
import { database } from "../Firebase"; // Import Firebase configuration
import { ref, push } from "firebase/database"; // Firebase methods for saving data

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const messagesRef = ref(database, "messages"); // Reference to the messages collection
      const newMessageRef = push(messagesRef); // Create a new reference for the new message
      await newMessageRef.set({
        firstName,
        lastName,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(), // Add a timestamp for sorting purposes
      });

      toast.success("Message sent successfully.");
      // Clear the form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <div className="container form-component message-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Send</button>
        </div>
      </form>
      <img src="/Vector.png" alt="vector" />
    </div>
  );
};

export default MessageForm;
