import React, { useState } from "react";
import "./StepperForm.css";

const StepperForm = () => {
  const [step, setStep] = useState(1);

  // 👇 Define individual step names here
 const steps = [
  { id: 1, label: <>Select<br/>Beneficiary</> },
  { id: 2, label: <>Add<br/>Details</> },
  { id: 3, label: <>Review<br/>Beneficiary</> },
  { id: 4, label: <>Select<br/>Allocation</> },
  { id: 5, label: <>Review<br/>Designation</> },
];


  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="container">
      {/* Step Progress */}
      <div className="stepper">
        {steps.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="step">
              <div
                className={`circle ${
                  step > item.id
                    ? "completed"
                    : step === item.id
                    ? "active"
                    : ""
                }`}
              >
                {step > item.id ? "✔" : ""}
              </div>
              <span className="label">{item.label}</span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`line ${step > item.id ? "filled" : ""}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Form Sections */}
      <div className="form-section">
        {step === 1 && (
          <>
            <h3>Personal Info</h3>
            <input placeholder="Enter Name" /><br />
            <input placeholder="Enter Email" />
          </>
        )}
        {step === 2 && (
          <>
            <h3>Address</h3>
            <input placeholder="City" /><br />
            <input placeholder="State" />
          </>
        )}
        {step === 3 && (
          <>
            <h3>Education</h3>
            <input placeholder="Qualification" /><br />
            <input placeholder="University" />
          </>
        )}
        {step === 4 && (
          <>
            <h3>Experience</h3>
            <input placeholder="Company Name" /><br />
            <input placeholder="Role" />
          </>
        )}
        {step === 5 && (
          <>
            <h3>Review</h3>
            <p>Review your information and submit.</p>
            <button>Submit</button>
          </>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="buttons">
        <button onClick={prevStep} disabled={step === 1}>
          Back
        </button>
        <button onClick={nextStep} disabled={step === steps.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperForm;
