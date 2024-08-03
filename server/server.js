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

// app.get("/", (req,res)=>{
//   res.json("Hello")
// })
// app.get("/ching", (req, res) => {
//   const q = "SELECT * FROM elderly";
//   db.query(q, (err, data) => {
//     // Corrected this line
//     if (err) {
//       console.error("Error fetching data:", err);
//       return res.status(500).json({ error: "Internal server error" });
//     }
//     return res.json(data);
//   });
// });



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
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // SQL query to check if there is a matching user
  const query = 'SELECT * FROM elderly WHERE ElderlyNid = ? AND Password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error during login:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }

    if (results.length > 0) {
      var elderly;
      // If a user is found, return success
      try{
        query2 =
        "SELECT * FROM elderly INNER JOIN person ON elderly.ElderlyNid = person.Nid WHERE ElderlyNid = ?";
      db.query(query2, [username], (err, results) => {
        if(err){console.log(err)}
        else{elderly = results[0]}
        console.log(elderly);
      });

      }
      catch(err){console.log(err)}
      res.json({ success: true, user: "Me", message: "Login successful" });
    } else {
      // If no user is found, return failure
      res.json({ success: false, message: "Invalid credentials" });
      console.log(res);
    }
  });
});

// Start the server
app.listen(8800, () => {
  console.log('Connected to backend on port 8800');
});

