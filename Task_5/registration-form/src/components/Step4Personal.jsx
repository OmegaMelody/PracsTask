import React from "react";

const Step4Personal = ({ register, onNext, onBack }) => {
  return (
    <div className="form-block">
      <label>First name</label>
      <input type="text" {...register("firstName")} />

      <label style={{ marginTop: "10px" }}>Last name</label>
      <input type="text" {...register("lastName")} />

      <label style={{ marginTop: "10px" }}>Birth date</label>
      <input type="date" {...register("birthDate")} />

      <div style={{ marginTop: "16px" }}>
        <button type="button" className="btn btn-outline" onClick={onBack}>
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginLeft: "8px" }}
          onClick={onNext}
        >
          Go Next
        </button>
      </div>
    </div>
  );
};

export default Step4Personal;
