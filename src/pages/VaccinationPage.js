import React from "react";
import { useId,useState } from "react";
import "./VaccinationPage.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";


export default function VaccinationPage({elderly,caretaker,availableVaccines}){
  //Creating subarrays
  const rows = [];
  for (let i = 0; i < availableVaccines.length; i += 3) {
    rows.push(availableVaccines.slice(i, i + 3));
  }
 //Setting up the day picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const oneWeekLater = new Date();
  oneWeekLater.setDate(oneWeekLater.getDate() + 7);
  const disabledDays = { before: tomorrow, after: oneWeekLater };

  //Setting up time slots
  const [selectedSlot, setSelectedSlot] = useState(null); //Time slot
  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    console.log(slot);
  };
   const generateTimeSlots = () => {
     const startTime = new Date();
     startTime.setHours(10, 0, 0); // 10:00 AM
     const endTime = new Date();
     endTime.setHours(15, 0, 0); // 3:00 PM

     const timeSlots = [];
     const interval = 30; // 30 minutes interval
     let currentTime = startTime;

     while (currentTime <= endTime) {
       timeSlots.push(
         currentTime.toLocaleTimeString([], {
           hour: "2-digit",
           minute: "2-digit",
         })
       );
       currentTime.setMinutes(currentTime.getMinutes() + interval);
     }

     return timeSlots;
   };
   const timeSlots = generateTimeSlots();


  //Appointment variables
  const [appointed, setAppointed] = useState(elderly.appointed);
  const [selected, setSelected] = useState(null);
  const formattedDate = selected ? format(selected, "dd-MM-yyyy") : "None";

  //Modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="vaccinationPage">
      <div className="appointmentCol">
        <div className="appointmentTitle">Appointment</div>
        <p className="pleaseSchedule">
          Please schedule an appointment at your desired vaccination centre.{" "}
        </p>

        <Button
          variant="primary"
          className="scheduleButton"
          onClick={handleShow}
        >
          {appointed ? "Reschedule" : "Schedule"}
        </Button>
        {/* Modal*/}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className="modalHeader">
            <Modal.Title>Schedule Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <div className="datePickerDiv">
              <h3 className="dateHeader">Select Date</h3>
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                modifiers={{ disabled: disabledDays }}
              />
            </div>
            <div className="timePickerDiv">
              <h3 className="dateHeader">Select Time</h3>
              <Container>
                <Row className="time-slot-grid">
                  {timeSlots.map((slot, index) => (
                    <Col key={index} xs={12} md={4} className="mb-3">
                      <Button
                        variant={selectedSlot === slot ? "primary" : "light"}
                        onClick={() => handleSlotClick(slot)}
                        className="w-100"
                      >
                        {slot}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              {appointed ? "Reschedule" : "Schedule"}
            </Button>
          </Modal.Footer>
        </Modal>
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
          History
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Vaccine</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Covid-19</td>
                <td>22 Jul, 2021</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Flu</td>
                <td>5 May, 2022</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}