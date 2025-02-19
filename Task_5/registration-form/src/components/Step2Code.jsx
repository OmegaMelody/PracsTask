import React from "react";

const Step2Code = ({ register, watch, errors, onNext, onBack }) => {
  const codeVal = watch("phoneCode") || "+1";
  const numberVal = watch("phoneNumber") || "not set";

  return (
    <div className="form-block">
      <div style={{ marginBottom: "10px", fontSize: "14px", color: "#555" }}>
        Phone: {codeVal} {numberVal}
        <div style={{ fontSize: "12px", color: "#999" }}>
          Number not confirmed yet
        </div>
      </div>

      <label>Confirmation code</label>
      <input
        type="text"
        placeholder="1234"
        {...register("code", { required: true })}
      />
      {errors.code && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          Code is required
        </div>
      )}

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
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step2Code;
