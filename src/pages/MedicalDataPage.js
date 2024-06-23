import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import "./MedicalDataPage.css";

const MedicalDataPage = () => {
  const [documents, setDocuments] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (name && date && file) {
      const newDocument = { name, date, file };
      setDocuments([...documents, newDocument]);
      setName("");
      setDate("");
      setFile(null);
    }
  };

  return (
    <div className="medical-data-page container">
      <h2 className="text-center my-4">Medical Data</h2>
      <Form onSubmit={handleUpload} className="mb-4">
        <Form.Group controlId="formName">
          <Form.Label>Disease Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter disease name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDate" className="mt-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mt-3">
          <Form.Label>Medical Document</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Upload
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Disease Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>{doc.name}</td>
              <td>{doc.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MedicalDataPage;
