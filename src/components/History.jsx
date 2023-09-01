import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const History = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from API
  useEffect(() => {
    axios
      .get("https://64f1b0a70e1e60602d24231e.mockapi.io/api/histories")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" align="center">
        Appointment History
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Provider Name</TableCell>
            <TableCell align="right">Booking Time</TableCell>
            <TableCell align="right">Care Name</TableCell>
            <TableCell align="right">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell component="th" scope="row">
                {appointment.id}
              </TableCell>
              <TableCell align="right">{appointment.provider_name}</TableCell>
              <TableCell align="right">
                {new Date(appointment.booking_time).toLocaleString()}
              </TableCell>
              <TableCell align="right">{appointment.care_name}</TableCell>
              <TableCell align="right">
                {new Date(appointment.createdAt).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default History;
