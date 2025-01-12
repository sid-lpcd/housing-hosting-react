import { useState } from "react";

function BookingForm() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);

  const changeCount = (field, value) => {
    if (field === "adults") setAdults((prev) => Math.max(1, prev + value));
    if (field === "children") setChildren((prev) => Math.max(0, prev + value));
    if (field === "babies") setBabies((prev) => Math.max(0, prev + value));
  };

  return (
    <form id="bookingForm" className="d-flex w-100 align-items-center">
      <div>
        <label htmlFor="checkin">Check-in:</label>
        <input type="date" id="checkin" name="checkin" required />
      </div>
      <div>
        <label htmlFor="checkout">Check-out:</label>
        <input type="date" id="checkout" name="checkout" required />
      </div>
      <PeopleDropdown
        adults={adults}
        children={children}
        babies={babies}
        changeCount={changeCount}
      />
      <div className="text-center btn-main w-100">
        <a href="#" id="submitLink" className="btn w-100">
          Book Now!
        </a>
      </div>
    </form>
  );
}

const PeopleDropdown = ({ adults, children, babies, changeCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <label htmlFor="people">Number of People:</label>
      <div
        id="peopleSummary"
        className="summary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {adults} Adults, {children} Children, {babies} Babies
      </div>
      {isOpen && (
        <div id="peopleDropdown" className="dropdown-content summary">
          <PeopleControl
            label="Adults (+16yrs):"
            count={adults}
            onChange={(val) => changeCount("adults", val)}
          />
          <PeopleControl
            label="Children (2-16yrs):"
            count={children}
            onChange={(val) => changeCount("children", val)}
          />
          <PeopleControl
            label="Babies (0-2yrs):"
            count={babies}
            onChange={(val) => changeCount("babies", val)}
          />
          <div className="text-center btn-main w-100">
            <a onClick={() => setIsOpen(false)} className="btn w-100">
              Done
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const PeopleControl = ({ label, count, onChange }) => (
  <div>
    <label>{label}</label>
    <button type="button" onClick={() => onChange(-1)} disabled={count === 0}>
      -
    </button>
    <input type="text" value={count} readOnly />
    <button type="button" onClick={() => onChange(1)}>
      +
    </button>
  </div>
);

export default BookingForm;
