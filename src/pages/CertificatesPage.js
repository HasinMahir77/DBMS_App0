import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import "./CertificatesPage.css";

const CertificatesPage = () => {
  const [certificates, setCertificates] = useState([
    {
      vaccineName: "Covid-19",
      numberOfDoses: 2,
      dosesCompleted: 2,
      lastDoseDate: "2023-05-15",
    },
    {
      vaccineName: "Flu",
      numberOfDoses: 1,
      dosesCompleted: 1,
      lastDoseDate: "2022-10-01",
    },
  ]);

  return (
    <div className="certificates-page">
      <h2>Vaccine Certificates</h2>
      <Table striped bordered hover className="certificates-table">
        <thead>
          <tr>
            <th>Vaccine Name</th>
            <th>Number of Doses</th>
            <th>Doses Completed</th>
            <th>Date of Last Dose</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate, index) => (
            <tr key={index}>
              <td>{certificate.vaccineName}</td>
              <td>{certificate.numberOfDoses}</td>
              <td>{certificate.dosesCompleted}</td>
              <td>{certificate.lastDoseDate}</td>
              <td>
                <Button variant="primary">Download</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CertificatesPage;
