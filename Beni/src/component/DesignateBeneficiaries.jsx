import React, { useState } from 'react';
import { Building2, HandCoins, Home, ChevronDown, User } from 'lucide-react';
import './DesignateBeneficiaries.css';

const DesignateBeneficiaries = ({ onSelectionChange, selectedType: initialSelectedType }) => {
  const [selectedType, setSelectedType] = useState(initialSelectedType || null);
  const [showHelp, setShowHelp] = useState(false);

  // Update local state when prop changes (for back navigation)
  React.useEffect(() => {
    if (initialSelectedType === null) {
      setSelectedType(null);
    } else {
      setSelectedType(initialSelectedType);
    }
  }, [initialSelectedType]);

  const beneficiaryTypes = [
    {
      id: 'individual',
      icon: User,
      label: 'An individual'
    },
    {
      id: 'organization',
      icon: Building2,
      label: 'An organization'
    },
    {
      id: 'trust',
      icon: HandCoins,
      label: 'A trust'
    },
    {
      id: 'estate',
      icon: Home,
      label: 'An estate'
    }
  ];

  const handleSelection = (typeId) => {
    setSelectedType(typeId);
    // Notify parent component about the selection
    if (onSelectionChange) {
      onSelectionChange(typeId);
    }
  };

  return (
    <div className="beneficiary-selector">
      {/* Beneficiary Type Options */}
      <div className="beneficiary-options">
        {beneficiaryTypes.map((type) => {
          const IconComponent = type.icon;
          return (
            <button
              key={type.id}
              onClick={() => handleSelection(type.id)}
              className={`beneficiary-option ${selectedType === type.id ? 'selected' : ''}`}
            >
              <div className="option-content">
                <IconComponent className="option-icon" strokeWidth={1.5} />
                <span className="option-label">{type.label}</span>
              </div>
              <div className={`radio-button ${selectedType === type.id ? 'selected' : ''}`}>
                {selectedType === type.id && <div className="radio-inner"></div>}
              </div>
            </button>
          );
        })}
      </div>

      {/* Help Section */}
      <div className="help-section">
        <button
          onClick={() => setShowHelp(!showHelp)}
          className="help-button"
        >
          <div className="help-header">
            <div className="help-icon">
              <svg
                className="question-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="help-title">Need some help deciding?</span>
          </div>
          <ChevronDown className={`chevron ${showHelp ? 'rotated' : ''}`} />
        </button>
        
        {showHelp && (
          <div className="help-content">
            <p>
              <strong>Individual:</strong> Select this if you're designating a person as a beneficiary.
            </p>
            <p>
              <strong>Organization:</strong> Select this if you're designating a nonprofit, charity, or company as a beneficiary.
            </p>
            <p>
              <strong>Trust:</strong> Choose this option if funds should go to a trust that manages assets for beneficiaries.
            </p>
            <p>
              <strong>Estate:</strong> Select this if the beneficiary is someone's estate or estate planning entity.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignateBeneficiaries;