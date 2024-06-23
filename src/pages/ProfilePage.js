import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./ProfilePage.css";

const ProfilePage = ({ elderly, caretaker, setElderly, setCaretaker }) => {
  const [isEditingElderly, setIsEditingElderly] = useState(false);
  const [isEditingCaretaker, setIsEditingCaretaker] = useState(false);
  const [elderlyAddress, setElderlyAddress] = useState(elderly.address);
  const [caretakerAddress, setCaretakerAddress] = useState(caretaker.address);

  const handleElderlySave = () => {
    setElderly({ ...elderly, address: elderlyAddress });
    setIsEditingElderly(false);
  };

  const handleCaretakerSave = () => {
    setCaretaker({ ...caretaker, address: caretakerAddress });
    setIsEditingCaretaker(false);
  };

  return (
    <div className="profile-page">
      <h2 className="text-center">Profile</h2>
      <div className="profile-section">
        <h4>Elderly Information</h4>
        <div>
          <strong>First Name:</strong> {elderly.fname}
        </div>
        <div>
          <strong>Last Name:</strong> {elderly.lname}
        </div>
        <div>
          <strong>Address:</strong>
          {isEditingElderly ? (
            <Form.Control
              type="text"
              value={elderlyAddress}
              onChange={(e) => setElderlyAddress(e.target.value)}
            />
          ) : (
            elderly.address
          )}
        </div>
        <div>
          <strong>Age:</strong> {new Date().getFullYear() - elderly.yob}
        </div>
        <div>
          <strong>NID:</strong> {elderly.nid}
        </div>
        {isEditingElderly ? (
          <Button onClick={handleElderlySave}>Save</Button>
        ) : (
          <Button onClick={() => setIsEditingElderly(true)}>Edit</Button>
        )}
      </div>

      <div className="profile-section">
        <h4>Caretaker Information</h4>
        <div>
          <strong>First Name:</strong> {caretaker.fname}
        </div>
        <div>
          <strong>Last Name:</strong> {caretaker.lname}
        </div>
        <div>
          <strong>Address:</strong>
          {isEditingCaretaker ? (
            <Form.Control
              type="text"
              value={caretakerAddress}
              onChange={(e) => setCaretakerAddress(e.target.value)}
            />
          ) : (
            caretaker.address
          )}
        </div>
        <div>
          <strong>Age:</strong> {new Date().getFullYear() - caretaker.yob}
        </div>
        {isEditingCaretaker ? (
          <Button onClick={handleCaretakerSave}>Save</Button>
        ) : (
          <Button onClick={() => setIsEditingCaretaker(true)}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
