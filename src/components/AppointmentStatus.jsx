import React, { useEffect, useState } from "react";
import { database } from "../Firebase"; // Import Firebase configuration
import { ref, get } from "firebase/database";
import { toast } from "react-toastify";

const AppointmentStatus = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null); // Store the logged-in user ID

  // Fetch the logged-in user ID from localStorage or Firebase Authentication
  useEffect(() => {
    const loggedInUserId = localStorage.getItem("loggedInUserId"); // Replace with how you get the logged-in user
    if (loggedInUserId) {
      setUserId(loggedInUserId);
    } else {
      toast.error("User not logged in.");
    }
  }, []);

  // Fetch appointments from Firebase for the logged-in user only
  useEffect(() => {
    const fetchAppointments = async () => {
      if (!userId) return; // Ensure we have the user ID before fetching appointments

      setLoading(true);
      try {
        const appointmentsRef = ref(database, "appointments");
        const snapshot = await get(appointmentsRef);
        if (snapshot.exists()) {
          const appointmentsData = snapshot.val();
          const userAppointments = Object.values(appointmentsData).filter(
            (appointment) => appointment.userId === userId // Filter by logged-in user ID
          );
          setAppointments(userAppointments);
        } else {
          setAppointments([]);
        }
      } catch (error) {
        toast.error("Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId]);

  return (
    <section className="appointment-status">
      <h3>Your Appointment Status</h3>
      {loading ? (
        <p>Loading...</p>
      ) : appointments.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Status</th>
              <th>Visited</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                <td>{appointment.appointment_date ? appointment.appointment_date.substring(0, 16) : "N/A"}</td>
                <td>{appointment.status}</td>
                <td>{appointment.hasVisited ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments found for this user.</p>
      )}
    </section>
  );
};

export default AppointmentStatus;
