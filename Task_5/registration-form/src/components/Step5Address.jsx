import React from "react";

const Step5Address = ({ register, onBack }) => {
  return (
    <div className="form-block">
      <label>Country</label>
      <input
        type="text"
        placeholder="USA"
        {...register("country")}
      />

      <label style={{ marginTop: "10px" }}>City</label>
      <input
        type="text"
        placeholder="New York"
        {...register("city")}
      />

      <label style={{ marginTop: "10px" }}>Address</label>
      <input
        type="text"
        placeholder="47 W 13th St"
        {...register("address")}
      />

      <div style={{ marginTop: "16px" }}>
        <button type="button" className="btn btn-outline" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Step5Address;
