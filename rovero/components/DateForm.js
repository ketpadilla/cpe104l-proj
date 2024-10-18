import React, { useState } from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing

// !! SEPARATE INTO INDIVIDUAL OBJECTS

const DateForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  // Set today's date as the minimum for check-in
  const today = new Date().toISOString().split("T")[0];

  // Update check-out min date when check-in changes
  const handleCheckInChange = (event) => {
    const selectedDate = event.target.value;
    setCheckInDate(selectedDate);

    // Calculate the minimum checkout date (one day after check-in)
    const minCheckoutDate = new Date(selectedDate);
    minCheckoutDate.setDate(minCheckoutDate.getDate() + 1); // Add one day

    // Set the minimum checkout date
    setCheckOutDate(''); // Reset checkout if it's less than new min
    document.getElementById('checkOut').setAttribute('min', minCheckoutDate.toISOString().split("T")[0]);
  };

  return (
    <form>
      <ul className="d-md-flex justify-content-lg-around">

        <li className="hm2-single-intro-item">
          <label
            htmlFor="checkIn"
            className="main-color d-block fontNoto f-700 mb-12 mt-35"
          >
            CHECK IN
          </label>
          <div className="check-in mb-40 position-relative">
            <input
              type="date"
              className="datepicker primary-color w-100"
              id="checkIn"
              placeholder="24 April, 24"
              min={today}
              value={checkInDate}
              onChange={handleCheckInChange}
            />
          </div>
          {/* /check-in */}
        </li>

        <li className="hm2-single-intro-item">
          <label
            htmlFor="checkOut"
            className="main-color d-block fontNoto f-700 mb-12 mt-35"
          >
            CHECK OUT
          </label>
          <div className="check-out mb-40 position-relative">
            <input
              type="date"
              className="datepicker primary-color w-100"
              id="checkOut"
              placeholder="24 April, 24"
              min={checkInDate ? new Date(new Date(checkInDate).setDate(new Date(checkInDate).getDate() + 1)).toISOString().split("T")[0] : ''}
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          {/* /check-out */}
        </li>

        <li className="hm2-single-intro-item">
          <div className="check-guests-form">
            <div className="course-filter">
              <label
                htmlFor="exampleFormControlSelect3"
                className="main-color d-block fontNoto f-700 mb-12 mt-35"
              >
                GUESTS
              </label>
              <select
                className="white-bg primary-color w-100 border-0 px-0 rounded-0 mb-40"
                id="exampleFormControlSelect3"
              >
                <option value="1" selected="selected">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
          {/* /check-guests-form */}
        </li>

        <li className="hm2-single-intro-item px-md-0">
          <div className="my-btn d-block form-search-btn w-100 h-100 mb-0">
            <Link href="/rooms-details" className="btn theme-bg w-100 h-100">
              Check Availability
            </Link>
          </div>
          {/* / btn */}
        </li>

      </ul>
    </form>
  );
};

export default DateForm;