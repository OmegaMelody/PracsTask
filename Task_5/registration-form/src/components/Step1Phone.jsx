import React from "react";


function formatLocalNumber(rawValue) {
  let digits = rawValue.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 6) {
    return digits.slice(0, 3) + " " + digits.slice(3);
  } else {
    return (
      digits.slice(0, 3) +
      " " +
      digits.slice(3, 6) +
      " " +
      digits.slice(6)
    );
  }
}

const Step1Phone = ({ register, errors, onNext }) => {
  const phoneCodes = ["+1", "+44", "+48", "+49", "+86", "+380"];

  return (
    <div className="form-block">
      <label>Choose country code</label>
      <select {...register("phoneCode")}>
        {phoneCodes.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>

      <label style={{ marginTop: "10px" }}>Enter phone number</label>
      <input
        type="text"
        placeholder="555 555 1234"
        {...register("phoneNumber", {
          required: true,
          onChange: (e) => {
            e.target.value = formatLocalNumber(e.target.value);
          },
        })}
      />
      {errors.phoneNumber && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          Phone number is required
        </div>
      )}

      <div style={{ marginTop: "16px" }}>
        <button type="button" className="btn btn-primary" onClick={onNext}>
          Send Code
        </button>
      </div>
    </div>
  );
};

export default Step1Phone;
