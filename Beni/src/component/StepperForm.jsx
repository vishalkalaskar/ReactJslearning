import React, { useState } from "react";
import "./StepperForm.css";
import { Radio, Space } from "antd";
import { UserOutlined, TeamOutlined, BankOutlined, HomeOutlined } from "@ant-design/icons";
import DesignateBeneficiaries from './DesignateBeneficiaries';
import Formone from './formone'
import Formtwo from "./formtwo";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [step2Sub, setStep2Sub] = useState(1);

  // State to track if each step/substep is valid
  const [step1Selected, setStep1Selected] = useState(null); // Store the selected beneficiary type
  const [step2SubData, setStep2SubData] = useState({
    sub1: { firstName: '', lastName: '', dob: '' },
    sub2: { email: '', phone: '', address: '' },
    sub3: { bankName: '', accountNumber: '', ifsc: '' }
  });
  const [step4Allocation, setStep4Allocation] = useState('');

  const steps = [
    { id: 1, label: <>Select<br />Beneficiary</> },
    { id: 2, label: <>Add<br />Details</> },
    { id: 3, label: <>Review<br />Beneficiary</> },
    { id: 4, label: <>Select<br />Allocation</> },
    { id: 5, label: <>Review<br />Designation</> },
  ];

  // Handle beneficiary selection from Step 1
  const handleBeneficiarySelection = (selectedType) => {
    setStep1Selected(selectedType);
  };

  // Check if Step 2 Sub-step 1 is valid
  const isStep2Sub1Valid = () => {
    const { firstName, lastName, dob } = step2SubData.sub1;
    return firstName.trim() !== '' && lastName.trim() !== '' && dob.trim() !== '';
  };

  // Check if Step 2 Sub-step 2 is valid
  const isStep2Sub2Valid = () => {
    const { email, phone, address } = step2SubData.sub2;
    return email.trim() !== '' && phone.trim() !== '' && address.trim() !== '';
  };

  // Check if Step 2 Sub-step 3 is valid
  const isStep2Sub3Valid = () => {
    const { bankName, accountNumber, ifsc } = step2SubData.sub3;
    return bankName.trim() !== '' && accountNumber.trim() !== '' && ifsc.trim() !== '';
  };

  // Check if Next button should be enabled
  const isNextEnabled = () => {
    if (step === 1) {
      return step1Selected !== null;
    }
    if (step === 2) {
      if (step2Sub === 1) return isStep2Sub1Valid();
      if (step2Sub === 2) return isStep2Sub2Valid();
      if (step2Sub === 3) return isStep2Sub3Valid();
    }
    if (step === 4) {
      return step4Allocation.trim() !== '';
    }
    // For other steps, enabled by default
    return true;
  };

  // Handle input changes for Step 2
  const handleInputChange = (substep, field, value) => {
    setStep2SubData(prev => ({
      ...prev,
      [substep]: {
        ...prev[substep],
        [field]: value
      }
    }));
  };

  // Reset state for each step
  const resetStep = (stepNumber) => {
    switch(stepNumber) {
      case 1:
        setStep1Selected(null);
        break;
      case 2:
        setStep2SubData({
          sub1: { firstName: '', lastName: '', dob: '' },
          sub2: { email: '', phone: '', address: '' },
          sub3: { bankName: '', accountNumber: '', ifsc: '' }
        });
        setStep2Sub(1);
        break;
      case 4:
        setStep4Allocation('');
        break;
      default:
        break;
    }
  };

  const nextStep = () => {
    if (step === 2 && step2Sub < 3) {
      setStep2Sub(step2Sub + 1);
    } else {
      setStep((prev) => Math.min(prev + 1, steps.length));
      if (step === 2) setStep2Sub(1);
    }
  };

  const prevStep = () => {
  // If at step 1 (first step), go back to previous page
  if (step === 1) {
    window.history.back();
    return;
  }
  
  if (step === 2 && step2Sub > 1) {
    setStep2Sub(step2Sub - 1);
  } else {
    const newStep = Math.max(step - 1, 1);
    
    // Reset the current step when going back
    if (step > 1) {
      resetStep(step);
    }
    
    setStep(newStep);
    
    // If going back to step 2, set to last sub-step
    if (newStep === 2) {
      setStep2Sub(3);
    }
  }
};

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

            {index < steps.length - 1 && (
              <div className={`line ${step > item.id ? "filled" : ""}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Form Sections */}
      <div className="form-section">
        {step === 1 && (
          <>
            <h3 className="text-lg font-semibold mb-6 text-center">
              Select Beneficiary Type
            </h3>
            <DesignateBeneficiaries 
              onSelectionChange={handleBeneficiarySelection}
              selectedType={step1Selected}
            />
          </>
        )}

        {step === 2 && (
          <>
            {/* <h3>Add Details</h3> */}
            {/* Step 2 Sub-Steps */}
            {step2Sub === 1 && (
              <div className="section">
                 <Formone />
              </div>
            )}

            {step2Sub === 2 && (
              <div className="section">
                 <Formtwo />
              </div>
            )}
          </>
        )}

        {step === 3 && (
          <>
            <h3>Review Beneficiary</h3>
            <div className="review-section">
              <p><strong>Beneficiary Type:</strong> {step1Selected}</p>
              <h4>Personal Details:</h4>
              <p>First Name: {step2SubData.sub1.firstName}</p>
              <p>Last Name: {step2SubData.sub1.lastName}</p>
              <p>Date of Birth: {step2SubData.sub1.dob}</p>
              <h4>Contact Details:</h4>
              <p>Email: {step2SubData.sub2.email}</p>
              <p>Phone: {step2SubData.sub2.phone}</p>
              <p>Address: {step2SubData.sub2.address}</p>
              <h4>Bank Details:</h4>
              <p>Bank Name: {step2SubData.sub3.bankName}</p>
              <p>Account Number: {step2SubData.sub3.accountNumber}</p>
              <p>IFSC Code: {step2SubData.sub3.ifsc}</p>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h3>Select Allocation</h3>
            <input 
              placeholder="Allocation %" 
              type="number"
              min="0"
              max="100"
              value={step4Allocation}
              onChange={(e) => setStep4Allocation(e.target.value)}
            />
          </>
        )}

        {step === 5 && (
          <>
            <h3>Review Designation</h3>
            <div className="review-section">
              <p><strong>Beneficiary Type:</strong> {step1Selected}</p>
              <h4>Personal Details:</h4>
              <p>First Name: {step2SubData.sub1.firstName}</p>
              <p>Last Name: {step2SubData.sub1.lastName}</p>
              <p>Date of Birth: {step2SubData.sub1.dob}</p>
              <h4>Contact Details:</h4>
              <p>Email: {step2SubData.sub2.email}</p>
              <p>Phone: {step2SubData.sub2.phone}</p>
              <p>Address: {step2SubData.sub2.address}</p>
              <h4>Bank Details:</h4>
              <p>Bank Name: {step2SubData.sub3.bankName}</p>
              <p>Account Number: {step2SubData.sub3.accountNumber}</p>
              <p>IFSC Code: {step2SubData.sub3.ifsc}</p>
              <h4>Allocation:</h4>
              <p>{step4Allocation}%</p>
            </div>
            <button onClick={() => alert('Form Submitted!')}>Submit</button>
          </>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="buttons">
        <button onClick={prevStep} disabled={false}>
          Back
        </button>
        {/* <button
          onClick={nextStep}
          disabled={!isNextEnabled() || step === 5}
        >
          Next
        </button> */}
        <button
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperForm;