import { useState, useEffect } from "react";
import Axios from 'axios';

const ShippingForm = () => {
    // shipping state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
// credit card state
    const [cardNumber, setCardNumber] = useState("");
    const [expirationMonth, setExpirationMonth] = useState("");
    const [expirationYear, setExpirationYear] = useState("");
    const [securityCode, setSecurityCode] = useState("");

    //SHIPPING INFO
  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("address"),
      { types: ["geocode"] }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address.split(",")[0] || ""); // Extract only the address
      setCity(
        place.address_components.find((component) =>
          component.types.includes("locality")
        )?.long_name || ""
      );
      setState(
        place.address_components.find((component) =>
          component.types.includes("administrative_area_level_1")
        )?.short_name || ""
      );
      setZipCode(
        place.address_components.find((component) =>
          component.types.includes("postal_code")
        )?.short_name || ""
      );
    });

    // Clean up function
    return () => {
      window.google.maps.event.clearInstanceListeners(autocomplete);
    };
  }, []);

  // CREDIT CARD INFO
  const handleCardNumberChange = (event) => {
    const value = event.target.value;
    // Validate input to ensure it contains only digits and has a maximum length of 16 characters
    if (/^\d{0,16}$/.test(value) || value === "") {
      setCardNumber(value);
    }
  };

  const handleExpirationMonthChange = (event) => {
    setExpirationMonth(event.target.value);
  };

  const handleExpirationYearChange = (event) => {
    setExpirationYear(event.target.value);
  };

  // Generate options for months (0-12)
  const monthOptions = Array.from({ length: 13 }, (_, index) => (
    <option key={index} value={index}>
      {index}
    </option>
  ));

  // Generate options for years (2024-2034)
  const yearOptions = Array.from({ length: 11 }, (_, index) => {
    const year = 2024 + index;
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

  const handleSecurityCodeChange = (event) => {
    const value = event.target.value;
    // Replace each character with an asterisk to hide the digits
    const maskedValue = value.replace(/\d/g, "*");
    setSecurityCode(maskedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     await Axios.post("http://localhost:3000/checkout", {
       firstName: firstName,
       lastName: lastName,
       address: address,
       state: state,
       city: city,
       zipCode: zipCode,
        cardNumber: cardNumber,
        expirationMonth: expirationMonth,
        expirationYear: expirationYear,
        securityCode: securityCode
     }).then((response) => {
        console.log(response.data)
     });
    //  console.log(response.data)
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Other form fields */}
      <div>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="zip-code">Zip Code</label>
        <input
          type="text"
          id="zip-code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </div>

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
      {/* Other form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ShippingForm;
