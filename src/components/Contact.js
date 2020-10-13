import React from 'react';
import './Contact.css';

const isOnline = true;

function Contact() {
  return (
    <div className="Contact">
      <img src="https://randomuser.me/api/portraits/women/64.jpg" class="avatar"></img>

      <div>
        <div class="name">
          <p>Katie Dunn</p>
        </div>
        <div className="status">
          <div className={isOnline ? "status-online" : "status-offline"}></div>
          <p className="status-text">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>

    </div>
  );
}

export default Contact;