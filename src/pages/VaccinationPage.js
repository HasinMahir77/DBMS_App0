import React from "react";
import { useState } from "react";
import "./VaccinationPage.css";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function VaccinationPage({elderly,caretaker,availableVaccines}){
    //Creating subarrays
    const rows = [];
    for (let i = 0; i < availableVaccines.length; i += 3) {
      rows.push(availableVaccines.slice(i, i + 3));
    };

   const [date, setDate] = useState(new Date());
   const [appointed, setAppointed] = useState(false);
    return (
      <div className="vaccinationPage">
        <div className="appointmentCol">
          <div className="appointmentTitle">Appointment</div>
          <p className="pleaseSchedule">Please schedule an appointment at your desired vaccination centre. </p>

          <Button variant="primary" className="scheduleButton">
            Schedule
          </Button>
          <Container className="availableVaccines">
            Available Vaccines
            {rows.map((row, rowIndex) => (
              <Row key={rowIndex} className="mb-3">
                {row.map((item, colIndex) => (
                  <Col key={colIndex} md={4}>
                    <div className="p-3 border bg-light">{item}</div>
                  </Col>
                ))}
              </Row>
            ))}
          </Container>
        </div>

        <div className="vaccinationHistoryCol">
          <div className="vaccinationHistoryTitle">
            History and Certificates
          </div>
        </div>
      </div>
    );

}