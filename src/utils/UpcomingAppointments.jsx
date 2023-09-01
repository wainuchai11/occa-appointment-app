import React from "react";

const UpcomingAppointments = ({ upcomingAppointments }) => (
  <div>
    <h3>Upcoming Appointments</h3>
    {/* You can populate this with actual data */}
    <ul>
      {upcomingAppointments.map((appointment, index) => (
        <li key={index}>{appointment}</li>
      ))}
    </ul>
  </div>
);
export default UpcomingAppointments