import React, { useState } from "react";
import "./StepperForm.css";

const StepperForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="container">
      {/* Step Progress Bar */}
      <div className="stepper">
        {[1, 2, 3, 4, 5].map((num, index) => (
          <React.Fragment key={num}>
            <div className="step">
              <div
                className={`circle ${
                  step > num ? "completed" : step === num ? "active" : ""
                }`}
              >
                {step > num ? "✔" : ""}
              </div>
              <span className="label">Step {num}</span>
            </div>

            {/* connector line between circles */}
            {index < 4 && (
              <div
                className={`line ${step > num ? "filled" : ""}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Form Section */}
      <div className="form-section">
        {step === 1 && (
          <>
            <h3>Step 1: Personal Info</h3>
            <input placeholder="Enter Name" /><br />
            <input placeholder="Enter Email" />
          </>
        )}
        {step === 2 && (
          <>
            <h3>Step 2: Address</h3>
            <input placeholder="City" /><br />
            <input placeholder="State" />
          </>
        )}
        {step === 3 && (
          <>
            <h3>Step 3: Education</h3>
            <input placeholder="Qualification" /><br />
            <input placeholder="University" />
          </>
        )}
        {step === 4 && (
          <>
            <h3>Step 4: Experience</h3>
            <input placeholder="Company Name" /><br />
            <input placeholder="Role" />
          </>
        )}
        {step === 5 && (
          <>
            <h3>Step 5: Review</h3>
            <p>Review your information and submit.</p>
            <button>Submit</button>
          </>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="buttons">
        <button onClick={prevStep} disabled={step === 1}>Back</button>
        <button onClick={nextStep} disabled={step === 5}>Next</button>
      </div>
    </div>
  );
};

export default StepperForm;
