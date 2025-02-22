import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {/* 8 am row */}
          <tr>
            <td className="time">8 am</td>
            <Event event="Morning Coffee ☕" color="green" location="Local Cafe" />
            <td></td>
            <td></td>
            <Event event="Dog Walk 🐶" color="pink" location="Neighborhood Park" />
            <td></td>
            <td></td>
            <Event event="Check Emails 📧" color="blue" />
          </tr>

          {/* 9 am row */}
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event event="Gym Workout 💪" color="blue" location="Downtown Gym" />
            <td></td>
            <td></td>
            <Event event="Read Book 📖" color="green" />
            <td></td>
            <Event event="Grocery Run 🛒" color="pink" />
          </tr>

          {/* 10 am row */}
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Study Session 📚" color="pink" location="Library" />
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {/* 11 am row */}
          <tr>
            <td className="time">11 am</td>
            <Event event="Haircut 💇" color="green" location="Barbershop" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Phone Call 📞" color="blue" />
            <td></td>
          </tr>

          {/* 12 pm row */}
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <Event event="Lunch with Alex 🍽️" color="pink" location="Cafe Bistro" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {/* 1 pm row */}
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <Event event="Doctor Checkup 🏥" color="green" location="Main Hospital" />
            <td></td>
            <td></td>
            <Event event="Work on Project 🖥️" color="blue" />
            <td></td>
            <td></td>
          </tr>

          {/* 2 pm row */}
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <Event event="Gardening 🌿" color="green" location="Backyard" />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Ice Cream Break 🍦" color="pink" />
          </tr>

          {/* 3 pm row */}
          <tr>
            <td className="time">3 pm</td>
            <Event event="Video Conference 🎥" color="blue" location="Zoom" />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Break 😌" color="green" />
            <td></td>
            <td></td>
          </tr>

          {/* 4 pm row */}
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Pick Up Kids 🚗" color="pink" location="School" />
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {/* 5 pm row */}
          <tr>
            <td className="time">5 pm</td>
            <Event event="Fancy Dinner 🎩" color="green" location="Maple & Ash" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yoga Class 🧘" color="blue" location="Studio" />
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
