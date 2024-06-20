import React from "react";
import { useId,useState } from "react";
import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import "./VaccinationPage.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";


export default function VaccinationPage({elderly,caretaker,availableVaccines}){
  //Creating subarrays
  const rows = [];
  for (let i = 0; i < availableVaccines.length; i += 3) {
    rows.push(availableVaccines.slice(i, i + 3));
  }
  //Appointment variables
  const inputId = useId();
  // Hold the month in state to control the calendar when the input changes
  const [month, setMonth] = useState(new Date());
  // Hold the selected date in state
  const [selectedDate, setSelectedDate] = useState(null);

  // Hold the input value in state
  const [inputValue, setInputValue] = useState("");
  const [appointed, setAppointed] = useState(elderly.appointed);
  const handleDayPickerSelect = (date) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setMonth(date);
      setInputValue(format(date, "MM/dd/yyyy"));
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // keep the input value in sync

    const parsedDate = parse(e.target.value, "MM/dd/yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };
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
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Schedule Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor={inputId}>
              <strong>Date: </strong>
            </label>
            <input
              style={{ fontSize: "inherit" }}
              id={inputId}
              type="text"
              value={inputValue}
              placeholder="MM/dd/yyyy"
              onChange={handleInputChange}
            />
            <DayPicker
              month={month}
              onMonthChange={setMonth}
              mode="single"
              selected={selectedDate}
              onSelect={handleDayPickerSelect}
              footer={
                <p aria-live="assertive" aria-atomic="true">
                  Selected: {selectedDate?.toDateString()}
                </p>
              }
            />
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