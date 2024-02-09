import { useState } from "react";
import Axios from 'axios';

const CreditCardForm = () => {





  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleFirstNameChange}
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={handleLastNameChange}
        required
      />

      <label htmlFor="cardNumber">Credit Card Number</label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
        maxLength="16"
        required
      />

      <div>
        <label htmlFor="expirationMonth">Expiration Month</label>
        <select
          id="expirationMonth"
          name="expirationMonth"
          value={expirationMonth}
          onChange={handleExpirationMonthChange}
          required
        >
          <option value="">-- Select Month --</option>
          {monthOptions}
        </select>
      </div>

      <div>
        <label htmlFor="expirationYear">Expiration Year</label>
        <select
          id="expirationYear"
          name="expirationYear"
          value={expirationYear}
          onChange={handleExpirationYearChange}
          required
        >
          <option value="">-- Select Year --</option>
          {yearOptions}
        </select>
      </div>

      <label htmlFor="securityCode">Security Code (CVC)</label>
      <input
        type="password" // Use type "password" to hide the characters
        id="securityCode"
        name="securityCode"
        value={securityCode}
        onChange={handleSecurityCodeChange}
        maxLength="3"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreditCardForm;
