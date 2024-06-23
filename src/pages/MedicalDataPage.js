import React, { useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import "./MedicalDataPage.css";

const MedicalDataPage = () => {
  const [medicalData, setMedicalData] = useState([]);
  const [diseaseName, setDiseaseName] = useState("");
  const [documentDate, setDocumentDate] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file && diseaseName && documentDate) {
      const newMedicalData = [
        ...medicalData,
        {
          name: diseaseName,
          date: documentDate,
          fileName: file.name,
        },
      ];
      setMedicalData(newMedicalData);
      setDiseaseName("");
      setDocumentDate("");
      setFile(null);
    }
  };

  const handleDelete = (index) => {
    const newMedicalData = medicalData.filter((_, i) => i !== index);
    setMedicalData(newMedicalData);
  };

  return (
    <div className="container medical-data-page">
      <h2 className="text-center my-4">Medical Data</h2>
      <Form onSubmit={handleSubmit} className="text-center mb-4">
        <Row className="justify-content-center">
          <Col md={3}>
            <Form.Group controlId="formDiseaseName">
              <Form.Label>Disease Name</Form.Label>
              <Form.Control
                type="text"
                value={diseaseName}
                onChange={(e) => setDiseaseName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="formDocumentDate">
              <Form.Label>Document Date</Form.Label>
              <Form.Control
                type="date"
                value={documentDate}
                onChange={(e) => setDocumentDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="formFile">
              <Form.Label>Upload File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} required />
            </Form.Group>
          </Col>
          <Col md={2} className="align-self-end">
            <Button type="submit" className="w-100">
              Upload
            </Button>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Disease Name</th>
            <th>Document Date</th>
            <th>File Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicalData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.date}</td>
              <td>{data.fileName}</td>
              <td>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => alert(`Download ${data.fileName}`)}
                >
                  Download
                </Button>
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MedicalDataPage;
