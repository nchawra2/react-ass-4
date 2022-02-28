import React from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEdit, FaPlusSquare } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

function AllStudents() {
  const rows = [
    {
      name: "Naishadh Chawra",
      age: 23,
      course: "MERN",
      Batch: "October",
    },
    {
      name: "Vidhi Chawra",
      age: 25,
      course: "MERN",
      Batch: "October",
    },
    {
      name: "John Doe",
      age: 33,
      course: "MERN",
      Batch: "September",
    },
    {
      name: "Sasha Grey",
      age: 27,
      course: "MEAN",
      Batch: "September",
    },
    {
      name: "Tori Black",
      age: 30,
      course: "MERN",
      Batch: "October",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col d-flex justify-content-between align-items-center">
          <p className="display-5 fw-bold">Students Details</p>
          <Button variant="contained" color="success">
            <FaPlusSquare className="me-2" />
            ADD STUDENT
          </Button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-10 m-auto">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Age</TableCell>
                  <TableCell align="center">Course</TableCell>
                  <TableCell align="center">Batch</TableCell>
                  <TableCell align="center">Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.age}</TableCell>
                    <TableCell align="center">{row.course}</TableCell>
                    <TableCell align="center">{row.Batch}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="warning">
                        <FaEdit className="me-2" />
                        edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default AllStudents;
