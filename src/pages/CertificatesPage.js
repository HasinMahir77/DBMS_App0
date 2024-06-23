import React from "react";
import { Table, Button } from "react-bootstrap";
import "./CertificatesPage.css";

const CertificatesPage = ({ certificates }) => {
  return (
    <div className="certificates-page container">
      <h2 className="text-center my-4">Vaccine Certificates</h2>
      <Table striped bordered hover className="text-center table">
        <thead>
          <tr>
            <th>Vaccine Name</th>
            <th>Number of Doses</th>
            <th>Doses Completed</th>
            <th>Date of Last Dose</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate, index) => (
            <tr key={index}>
              <td>{certificate.name}</td>
              <td>{certificate.numberOfDoses}</td>
              <td>{certificate.dosesCompleted}</td>
              <td>{certificate.dateOfLastDose}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => alert("Download placeholder")}
                >
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CertificatesPage;
