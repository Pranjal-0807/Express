// Part 6 => CRUD Operations with Express and saving changes in data.json file
// const fs = require("fs");
// const express = require("express");
// const url = require("url");
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.listen(port, () => {
//   console.log(`Server is running on port : ${port}`);
// });

// // Getting all students data
// app.get("/students", (req, res) => {
//   console.log("Request URL: " + req.url);
//   fs.readFile("data.json", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(JSON.parse(data));
//     }
//   });
// });

// // Getting a specific student data
// app.get("/students/:id", (req, res) => {
//   console.log("Request URL: " + req.url);
//   fs.readFile("data.json", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const students = JSON.parse(data);
//       const student = students.find(
//         (student) => student.id === parseInt(req.params.id)
//       );
//       res.json(student);
//     }
//   });
// });

// // Adding a new student
// app.post("/students", (req, res) => {
//   console.log("Request URL: " + req.url);
//   fs.readFile("data.json", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const students = JSON.parse(data);
//       students.push(req.body);
//       fs.writeFile("data.json", JSON.stringify(students), (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.json({ message: "Data saved successfully" });
//         }
//       });
//     }
//   });
// });

// // Updating a student data
// app.put("/students/:id", (req, res) => {
//   console.log("Request URL: " + req.url);
//   fs.readFile("data.json", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const students = JSON.parse(data);
//       const studentId = students.findIndex(
//         (student) => student.id === parseInt(req.params.id)
//       );
//       students[studentId] = req.body;
//       fs.writeFile("data.json", JSON.stringify(students), (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.json({ message: "Data updated successfully" });
//         }
//       });
//     }
//   });
// });

// // Deleting a student data
// app.delete("/students/:id", (req, res) => {
//   console.log("Request URL: " + req.url);
//   fs.readFile("data.json", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const students = JSON.parse(data);
//       const updatedStudents = students.filter(
//         (student) => student.id !== parseInt(req.params.id)
//       );
//       fs.writeFile("data.json", JSON.stringify(updatedStudents), (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.json({ message: "Data deleted successfully" });
//         }
//       });
//     }
//   });
// });

// Part 5 => CRUD Operations with Express
// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// let students = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 21,
//     course: "Computer Science",
//     university: "XYZ University",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     age: 22,
//     course: "Mathematics",
//     university: "ABC University",
//   },
// ];

// app.listen(port, () => {
//   console.log(`Server is running on port : ${port}`);
// });

// // Getting all students data
// app.get("/students", (req, res) => {
//   console.log("Request URL: " + req.url);
//   res.json(students);
// });

// // Getting a specific student data
// app.get("/students/:id", (req, res) => {
//   console.log("Request URL: " + req.url);
//   const student = students.find(
//     (student) => student.id === parseInt(req.params.id)
//   );
//   res.json(student);
// });

// // Adding a new student
// app.post("/students", (req, res) => {
//   console.log("Request URL: " + req.url);
//   const newStudent = req.body;
//   students.push(newStudent);
//   res.json({ message: "Data saved successfully" });
// });

// // Updating a student data
// app.put("/students/:id", (req, res) => {
//   console.log("Request URL: " + req.url);
//   const studentId = students.findIndex(
//     (student) => student.id === parseInt(req.params.id)
//   );
//   students[studentId] = req.body;
//   res.json({ message: "Data updated successfully" });
// });

// // Deleting a student data
// app.delete("/students/:id", (req, res) => {
//   console.log("Request URL: " + req.url);
//   students = students.filter(
//     (student) => student.id !== parseInt(req.params.id)
//   );
//   res.json({ message: "Data deleted successfully" });
// });

// Part 4
// const fs = require("fs");
// const express = require("express");
// const url = require("url");
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.listen(port, () => {
//   console.log(`Server is running on port : ${port}`);
// });

// app.get("/", (req, res) => {
//   console.log("Request URL: " + req.url);
//   const parsedUrl = url.parse(req.url, true);
//   console.log(parsedUrl);
//   fs.readFile("data.json", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(JSON.parse(data));
//     }
//   });
// });

// Part 3
// const fs = require("fs");
// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.listen(port, () => {
//   console.log(`Server is running on port : ${port}`);
// });

// app.post("/", (req, res) => {
//   console.log("Request URL: " + req.url);
//   fs.writeFile("data.json", JSON.stringify(req.body), (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json({ message: "Data saved successfully" });
//     }
//   });
// });

// Part 2
// const fs = require("fs");
// const express = require("express");
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server is running on port : ${port}`);
// });

// app.get("/", (req, res) => {
//   console.log("Request URL: " + req.url);
//   fs.readFile("data.json", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(JSON.parse(data));
//     }
//   });
// });

// Part 1
// const express = require("express");
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server is running on port : ${port}`);
// });

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World in JSON Format" });
//   res.send("Hello World");
// });
