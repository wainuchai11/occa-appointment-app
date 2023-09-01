import React from 'react';

const ProviderDetails = ({ provider, onBookAppointment }) => (
  <div>
    <h3>{provider.name}</h3>
    <p>{provider.details}</p>
    {/* Implement the booking UI here, for simplicity I am just using a button */}
    <button onClick={() => onBookAppointment(provider)}>Book Appointment</button>
  </div>
);
export default ProviderDetails