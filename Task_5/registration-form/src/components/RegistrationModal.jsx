import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";

import Step1Phone from "./Step1Phone";
import Step2Code from "./Step2Code";
import Step3EmailPass from "./Step3EmailPass";
import Step4Personal from "./Step4Personal";
import Step5Address from "./Step5Address";

const CORRECT_CODE = "1234";

const RegistrationModal = () => {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneCode: "+1",
      phoneNumber: "",
      code: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      country: "",
      city: "",
      address: "",
    },
  });

  const goNext = () => {
    if (step === 2) {
      const enteredCode = watch("code");
      if (enteredCode !== CORRECT_CODE) {
        alert("Невірний код підтвердження!");
        return;
      }
    }
    setStep(step + 1);
  };

  const goBack = () => setStep(step - 1);

  const onSubmitAll = (data) => {
    console.log("Final Data:", data);
    alert("Дані зібрано! Перевірте консоль.");
    reset();
    setStep(1);
    setOpen(false);
  };

  const closeModal = () => setOpen(false);

  const steps = [1,2,3,4,5];
  const isRegistration = step < 4;
  const titleText = isRegistration ? "Registration" : "Profile info";
  const subtitleText = isRegistration
    ? "Fill in the registration data. It will take a couple of minutes. All you need is a phone number and email."
    : "Fill in the data for profile. It will take a couple of minutes. You only need a passport.";

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" onClose={closeModal} className="relative z-10">
        <Transition.Child as={Fragment} enter="" enterFrom="" enterTo="" leave="" leaveFrom="" leaveTo="">
          <div className="modal-backdrop" />
        </Transition.Child>

        <div className="modal-container">
          <Transition.Child as={Fragment} enter="" enterFrom="" enterTo="" leave="" leaveFrom="" leaveTo="">
            <Dialog.Panel className="modal-panel">
              <div className="modal-header">
                <Dialog.Title>
                  <h2>{titleText}</h2>
                </Dialog.Title>
                <button onClick={closeModal}>X</button>
              </div>

              <div className="step-indicator">
                {steps.map((s) => (
                  <div
                    key={s}
                    className={`step-dot ${s <= step ? "active" : ""}`}
                  />
                ))}
              </div>

              <p className="subtitle">{subtitleText}</p>

              <div className="info-alert">
                <div className="info-alert-icon">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 
                       0 10-9 0V10.5M6 10.5h12a2.25 
                       2.25 0 012.25 2.25v7.5A2.25 
                       2.25 0 0118 22.5H6a2.25 
                       2.25 0 01-2.25-2.25v-7.5A2.25 
                       2.25 0 016 10.5z"
                    />
                  </svg>
                </div>
                <div className="info-alert-text">
                  We take privacy issues seriously. You can be sure your personal data is securely protected.
                </div>
                <button className="close-btn" onClick={() => {}}>
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmitAll)}>
                {step === 1 && (
                  <Step1Phone
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    errors={errors}
                    onNext={goNext}
                  />
                )}
                {step === 2 && (
                  <Step2Code
                    register={register}
                    watch={watch}
                    errors={errors}
                    onNext={goNext}
                    onBack={goBack}
                  />
                )}
                {step === 3 && (
                  <Step3EmailPass
                    register={register}
                    errors={errors}
                    onNext={goNext}
                    onBack={goBack}
                  />
                )}
                {step === 4 && (
                  <Step4Personal
                    register={register}
                    onNext={goNext}
                    onBack={goBack}
                  />
                )}
                {step === 5 && (
                  <Step5Address
                    register={register}
                    onBack={goBack}
                  />
                )}

                {step === 5 && (
                  <div style={{ marginTop: "10px" }}>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                )}
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RegistrationModal;
