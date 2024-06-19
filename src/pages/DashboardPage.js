import React from 'react';
import "./DashboardPage.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";




export default function DsahboardPage({elderly, caretaker}) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const pieData = {
    labels: ["Vaccinated", "Not Vaccinated"],
    datasets: [
      {
        label: "Vaccination %",
        data: [18, 82],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)","rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 18, // Change this value to make the legend text larger
          },
        },
      },
    
    },
  };

  return (
    <div className="dashboard">
      <div className="dashboardTiles">
        <div className="campaignCard">
          Campaign:
          <div>ONGOING</div>
        </div>
        <div className="notificationCard">
          Notifications:
          <div>0</div>
        </div>
        <div className="vaccinesTaken">
          Vaccines Taken:
          <div>2</div>
        </div>
      </div>
      <div className="mainContent">
        <div className="elderlyOverview">
          <div className="overviewTitle">Overview</div>
          <div className="elderlyInfo">
            <div className="personalInfo">
              <span>Name: {elderly.fname + " " + elderly.lname}</span>
              <span>
                DOB: {elderly.dob + "." + elderly.mob + "." + elderly.yob}
              </span>
              <span>Caretaker: {caretaker.fname + " " + caretaker.lname}</span>
            </div>
            <div className='appointmentInfo'>
              <span>Appointments</span>
              <span>NONE</span>
            </div>
          </div>
        </div>
        <div className="campaignInfo">
          <div className="campaignInfoTitle">Campaign Information</div>
          <div className="campaignInfoContent">
            <ListGroup className="offeredVaccineList">
              Vaccines Offered!
              <ListGroup.Item>Covid-19</ListGroup.Item>
              <ListGroup.Item>Measles</ListGroup.Item>
              <ListGroup.Item>Cholera</ListGroup.Item>
              <ListGroup.Item>Tetanus</ListGroup.Item>
            </ListGroup>
            <Pie className="pieChart" data={pieData} options={pieOptions}></Pie>
          </div>
        </div>
      </div>
    </div>
  );
}


