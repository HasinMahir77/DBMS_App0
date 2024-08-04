//Imports
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

//Initialization
const app = express();
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MahirSql",
  database: "dbms_g5",
});
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database as id " + db.threadId);
});



// Create a new record in a table (POST /data/:tableName)
app.post('/data/:tableName', (req, res) => {
  const { tableName } = req.params;
  const data = req.body;
  const columns = Object.keys(data).join(', ');
  const values = Object.values(data);
  const placeholders = values.map(() => '?').join(', ');

  const query = `INSERT INTO ?? (${columns}) VALUES (${placeholders})`;
  db.query(query, [tableName, ...values], (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(201).json({ message: "Record added successfully", id: results.insertId });
  });
});

// Read all data from a table (GET /data/:tableName)
app.get('/data/:tableName', (req, res) => {
  const { tableName } = req.params;
  const query = `SELECT * FROM ??`; 
  db.query(query, [tableName], (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
});

// Update a record in a table (PUT /data/:tableName/:id)
app.put('/data/:tableName/:id', (req, res) => {
  const { tableName, id } = req.params;
  const data = req.body;
  const updates = Object.keys(data).map(key => `${key} = ?`).join(', ');
  const values = Object.values(data);

  const query = `UPDATE ?? SET ${updates} WHERE id = ?`;
  values.push(id);

  db.query(query, [tableName, ...values], (err, results) => {
    if (err) {
      console.error("Error updating data:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ message: "Record updated successfully" });
  });
});

// Delete a record from a table (DELETE /data/:tableName/:id)
app.delete('/data/:tableName/:id', (req, res) => {
  const { tableName, id } = req.params;
  const query = `DELETE FROM ?? WHERE id = ?`;

  db.query(query, [tableName, id], (err, results) => {
    if (err) {
      console.error("Error deleting data:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.json({ message: "Record deleted successfully" });
  });
});

// Endpoint to handle login requests
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const [userResults] = await db
      .promise()
      .query("SELECT * FROM elderly WHERE ElderlyNid = ? AND Password = ?", [
        username,
        password,
      ]);

    if (userResults.length > 0) {
      const elderlyNid = userResults[0].ElderlyNid;

      // Get elderly details
      const [elderlyResults] = await db
        .promise()
        .query(
          "SELECT * FROM elderly INNER JOIN person ON elderly.ElderlyNid = person.Nid WHERE ElderlyNid = ?",
          [elderlyNid]
        );
      const elderly = elderlyResults[0];

      // Get caretaker details
      const [caretakerResults] = await db
        .promise()
        .query(
          "SELECT * FROM caretaker INNER JOIN person ON caretaker.CaretakerNid = person.Nid WHERE CaretakerNid = ?",
          [elderly.CaretakerNid]
        );
      const caretaker = caretakerResults[0];

      // Log the results
      console.log("Elderly:", elderly);
      console.log("Caretaker:", caretaker);

      // Send the response
      res.json({
        success: true,
        message: "Login successful",
        elderly: elderly,
        caretaker: caretaker,
      });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
      console.log("Invalid credentials");
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Fetch appointments of a specific elderly
app.get("/appointments/:elderlyNid", async (req, res) => {
  var elderlyNid = req.params.elderlyNid;
  const query = "SELECT * FROM appointment WHERE ElderlyNid = ?";

  const appointments = await db.promise().query(query, [elderlyNid]);

  
  db.query(query, [elderlyNid], (err, results) => {
    if (err) {
      console.error("Error fetching appointments:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("Appointments:")
    console.log(results);
    res.json(results);
  });


  
});

// Start the server
app.listen(8800, () => {
  console.log('Connected to backend on port 8800');
});

