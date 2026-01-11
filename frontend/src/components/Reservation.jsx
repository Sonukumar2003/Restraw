import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://restraw-1.onrender.com/api/v1/reservations/send",
        {
          firstName,
          lastName,
          email,
          date,
          time,
          phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(response.data.message);

      setFirstName("");
      setLastName("");
      setEmail("");
      setDate("");
      setTime("");
      setPhone("");

      navigate("/success");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">

        <div className="banner">
          <img src="/reservation.png" alt="reservation" />
        </div>

        <div className="banner">
          <div className="reservation_form_box">
            <h1>Make a Reservation</h1>
            <p>For further questions, please call</p>

            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <button type="submit">
                RESERVE NOW
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Reservation;
