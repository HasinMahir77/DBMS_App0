import React from "react";
import { useId,useState } from "react";
import "./VaccinationPage.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";

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
  const [selectedSlot, setSelectedSlot] = useState(elderly.appointment.time); //Time slot
  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    elderly.appointment.time = slot;
    console.log("Selected: "+slot);
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
  const [selectedDate, setSelectedDate] = useState(elderly.appointment.date);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const formattedDate = selectedDate ? format(selectedDate, "dd-MM-yyyy") : "None";

  const centers = [
    { value: "center1", label: "Vaccination Center 1" },
    { value: "center2", label: "Vaccination Center 2" },
    { value: "center3", label: "Vaccination Center 3" },
  ];
  function handleDropdown(center){
    setSelectedCenter(center);
  };

  //Modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="vaccinationPage">
      <div className="appointmentCol">
        <div className="appointmentTitle">Appointment</div>
        {!appointed && (
          <p className="pleaseSchedule">
            Please schedule an appointment at your desired vaccination center.
          </p>
        )}
        <div className="appointmentInfo"></div>
        <div className="appointmentButtonDiv">
          <Button
            variant="primary"
            className="scheduleButton"
            onClick={handleShow}
          >
            {appointed ? "Reschedule" : "Schedule"}
          </Button>
          {appointed && (
            <Button className="cancelScheduleButton" variant="danger">
              Cancel
            </Button>
          )}
        </div>
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
              <h4 className="dateHeader">Date</h4>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                modifiers={{ disabled: disabledDays }}
              />
            </div>
            <div className="timePickerDiv">
              <h4 className="dateHeader">Time</h4>
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
              <h4 className="dateHeader">Vaccination Center</h4>
              <Select
                value={selectedCenter}
                onChange={handleDropdown}
                options={centers}
                placeholder="Select an option"
                isClearable
              />
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
          <Table bordered size="sm" className="historyTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Vaccine</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Covid-19</td>
                <td>22 Jul, 2021</td>
                <td>3/3</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Flu</td>
                <td>5 May, 2022</td>
                <td>1/1</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}