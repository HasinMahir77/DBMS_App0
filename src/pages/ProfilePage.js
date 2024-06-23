// src/pages/ProfilePage.js
import React, { useState } from "react";
import "./ProfilePage.css";

function ProfilePage({ elderly, setElderly }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState(elderly.address);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setElderly({ ...elderly, address: newAddress });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setNewAddress(e.target.value);
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <p>First Name: {elderly.fname}</p>
        <p>Last Name: {elderly.lname}</p>
        <p>
          Address:
          {isEditing ? (
            <input type="text" value={newAddress} onChange={handleChange} />
          ) : (
            <span>{elderly.address}</span>
          )}
        </p>
        <p>Age: 65</p>
        <p>NID: {elderly.nid}</p>
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit Address</button>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
