import React from "react";

const Step3EmailPass = ({ register, errors, onNext, onBack }) => {
  return (
    <div className="form-block">
      <label>Enter your email</label>
      <input
        type="email"
        placeholder="alex_manager@gmail.com"
        {...register("email", {
          required: "Email is required",
          validate: {
            isGmail: (value) =>
              value.includes("@gmail.com") || "Email must be a Gmail address",
          },
        })}
      />
      {errors.email && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {errors.email.message}
        </div>
      )}

      <label style={{ marginTop: "10px" }}>Set a password</label>
      <input
        type="password"
        placeholder="*******"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {errors.password.message}
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
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Step3EmailPass;
