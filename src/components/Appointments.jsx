import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Avatar,
  Typography,
} from "@mui/material";
import CareProviders from "../utils/CareProviders";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [providers, setProviders] = useState([]);

  const fetchData = async () => {
    try {
      // Replace with your API endpoint
      const appointmentsData = await axios.get(
        "https://64f1b0a70e1e60602d24231e.mockapi.io/api/appointment"
      );
      const providersData = await axios.get(
        "https://64f1b0a70e1e60602d24231e.mockapi.io/api/appointment"
      );

      setAppointments(appointmentsData.data);
      setProviders(providersData.data);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Upcoming Appointments</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Appointment Time</TableCell>
            <TableCell>Provider Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>
                {new Date(appointment.appointmentTime * 1000).toLocaleString()}
              </TableCell>
              <TableCell>{appointment.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CareProviders providers={providers} />
    </Container>
  );
};

export default Appointments;
