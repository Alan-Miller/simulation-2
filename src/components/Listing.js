import React from 'react';
import '../styles/Listing.css';

export default function Listing(props) {
  const { img, property_desc, details, loan_amt, mortgage, rec_rent, des_rent, address, city } = props.property;

  return (
    <div className="Listing">
      <div className="Listing_img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="Listing_desc">
        <h2>Details</h2>
        <p>{property_desc}</p>
      </div>
      <div className="Listing_details">
        <p>Loan: {loan_amt}</p>
        <p>Monthly Mortgage: {mortgage}</p>
        <p>Recommended Rent: {rec_rent}</p>
        <p>Desired Rent: {des_rent}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
      </div>
    </div>
  )
}