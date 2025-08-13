import React from 'react';
import "./index.css";

const Marquee = () => {
  return (
    <div className="marquee-container mt-10">
      <div className="marquee-text">
        The Resort Villa | Luxury Rooms & Suites | Great Deals Available | Book Now
        &nbsp;&nbsp;&nbsp;&nbsp; {/* Adds space between repeats */}
        The Resort Villa | Exclusive Packages | Perfect for Your Vacation | Book Your Stay Today
        &nbsp;&nbsp;&nbsp;&nbsp; {/* Adds space between repeats */}
        The Resort Villa | Affordable Luxury | Special Discounts for Long Stays | Reserve Now
        &nbsp;&nbsp;&nbsp;&nbsp; {/* Adds space between repeats */}
        The Resort Villa | Book Now and Save | Special Offers for Families | Perfect Getaway
      </div>
    </div>
  );
};

export default Marquee;
