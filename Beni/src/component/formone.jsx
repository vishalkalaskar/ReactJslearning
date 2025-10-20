import React, { useState, useRef } from 'react';
import { ChevronDown, Calendar, Eye, EyeOff } from 'lucide-react';

const Formone = () => {
  const [showSSN, setShowSSN] = useState(false);
  const [formData, setFormData] = useState({
    prefix: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    relation: '',
    dob: '',
    ssn: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    ssn: ''
  });

  function useDebouncedLoggerone() {
    const timer = useRef(null);
    return function logDebouncedone(data) {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        console.log('Form Data Saved:', data);
      }, 900);
    }
  }
  
  const logDebouncedone = useDebouncedLoggerone();

  const handleChange = (field, value) => {
    let validatedValue = value;
    let errorMessage = '';

    // Name fields validation (firstName, middleName, lastName)
    if (['firstName', 'middleName', 'lastName'].includes(field)) {
      // Check if input contains invalid characters
      if (/[^a-zA-Z\s]/.test(value)) {
        errorMessage = 'Only letters and spaces allowed';
      }
      // Check length
      if (value.length > 20) {
        errorMessage = 'Maximum 20 characters allowed';
      }
      // Only allow letters and spaces, max 20 characters
      validatedValue = value.replace(/[^a-zA-Z\s]/g, '').slice(0, 20);
    }

    // SSN validation
    if (field === 'ssn') {
      // Check if input contains invalid characters
      if (/\D/.test(value)) {
        errorMessage = 'Only numbers allowed';
      }
      // Check length
      if (value.length > 8) {
        errorMessage = 'Maximum 8 digits allowed';
      }
      // Only allow digits, max 8 numbers
      validatedValue = value.replace(/\D/g, '').slice(0, 8);
    }

    // Update errors
    setErrors(prev => ({
      ...prev,
      [field]: errorMessage
    }));

    // Clear error after 3 seconds
    if (errorMessage) {
      setTimeout(() => {
        setErrors(prev => ({
          ...prev,
          [field]: ''
        }));
      }, 3000);
    }

    setFormData(prev => {
      const updated = { ...prev, [field]: validatedValue };
      logDebouncedone(updated);
      return updated;
    });
  };

  const prefixOptions = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.'];
  const suffixOptions = ['Jr.', 'Sr.', 'II', 'III', 'IV'];
  const relationOptions = ['Spouse', 'Child', 'Parent', 'Sibling', 'Other'];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-lg p-8">
        {/* Row 1: Prefix and First Name */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-blue-900 font-semibold mb-2">
              Prefix <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <select
                value={formData.prefix}
                onChange={(e) => handleChange('prefix', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl appearance-none bg-white focus:outline-none focus:border-blue-500"
              >
                <option value=""></option>
                {prefixOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" size={20} />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-blue-900 font-semibold mb-2">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className={`w-full px-4 py-3 border-2 ${errors.firstName ? 'border-red-500' : 'border-blue-500'} rounded-xl focus:outline-none focus:border-blue-600`}
              required            
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
        </div>

        {/* Row 2: Middle Name */}
        <div className="mb-6">
          <label className="block text-blue-900 font-semibold mb-2">
            Middle name <span className="text-gray-500 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={formData.middleName}
            onChange={(e) => handleChange('middleName', e.target.value)}
            className={`w-full px-4 py-3 border-2 ${errors.middleName ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:border-blue-500`}
          />
          {errors.middleName && (
            <p className="text-red-500 text-sm mt-1">{errors.middleName}</p>
          )}
        </div>

        {/* Row 3: Last Name and Suffix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <label className="block text-blue-900 font-semibold mb-2">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className={`w-full px-4 py-3 border-2 ${errors.lastName ? 'border-red-500' : 'border-blue-500'} rounded-xl focus:outline-none focus:border-blue-600`}
              required
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-blue-900 font-semibold mb-2">
              Suffix <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <select
                value={formData.suffix}
                onChange={(e) => handleChange('suffix', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl appearance-none bg-white focus:outline-none focus:border-blue-500"
              >
                <option value=""></option>
                {suffixOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        {/* Row 4: Relation */}
        <div className="mb-6">
          <label className="block text-blue-900 font-semibold mb-2">
            Relation <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.relation}
              onChange={(e) => handleChange('relation', e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-500 rounded-xl appearance-none bg-white focus:outline-none focus:border-blue-600"
              required
            >
              <option value=""></option>
              {relationOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 pointer-events-none" size={20} />
          </div>
        </div>

        {/* Row 5: DOB and SSN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-blue-900 font-semibold mb-2">
              Date of birth <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-blue-900 font-semibold mb-2">
              Social Security number <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <input
                type={showSSN ? "text" : "password"}
                value={formData.ssn}
                onChange={(e) => handleChange('ssn', e.target.value)}
                placeholder="8 digits only"
                maxLength="8"
                className={`w-full px-4 py-3 border-2 ${errors.ssn ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:border-blue-500 pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowSSN(!showSSN)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showSSN ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.ssn && (
              <p className="text-red-500 text-sm mt-1">{errors.ssn}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formone;