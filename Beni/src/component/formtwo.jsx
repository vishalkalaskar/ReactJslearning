import React, { useState, useRef } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const Formtwo = () => {
  const [useMyAddress, setUseMyAddress] = useState(false);

  const [formDatatwo, setFormDatatwo] = useState({
    prefix: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    relation: '',
    dob: '',
    ssn: '',
    country: '',
    state: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: ''
  });

  function useDebouncedLogger() {
    const timer = useRef(null);
    return function logDebounced(data) {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        console.log('Form Two Data Saved:', data);
      }, 900);
    }
  }

  const logDebounced = useDebouncedLogger();

  const handleChange = (field, value) => {
    let validatedValue = value;
    let errorMessage = '';

    // Email validation
    if (field === 'email') {
      // Check for valid email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        errorMessage = 'Please enter a valid email address';
      }
      // No special filtering for email, just validation message
      validatedValue = value;
    }

    // Phone validation
    if (field === 'phone') {
      // Only allow numbers, spaces, +, (, ), -
      if (/[^0-9\s+()-]/.test(value)) {
        errorMessage = 'Only numbers and phone symbols allowed';
      }
      // Check length (max 20 characters for international formats)
      if (value.length > 10) {
        errorMessage = 'Maximum 20 characters allowed';
      }
      validatedValue = value.replace(/[^0-9\s+()-]/g, '').slice(0, 20);
    }

    // Address validation
    if (field === 'address') {
      // Allow letters, numbers, spaces, and common address characters (.,-)
      if (/[^a-zA-Z0-9\s.,-]/.test(value)) {
        errorMessage = 'Only letters, numbers, and basic punctuation allowed';
      }
      // Max 100 characters
      if (value.length > 100) {
        errorMessage = 'Maximum 100 characters allowed';
      }
      validatedValue = value.replace(/[^a-zA-Z0-9\s.,-]/g, '').slice(0, 100);
    }

    // ZIP Code validation
    if (field === 'zipCode') {
      // Only numbers and letters (for international ZIP codes)
      if (/[^a-zA-Z0-9\s-]/.test(value)) {
        errorMessage = 'Only letters, numbers, and hyphens allowed';
      }
      // Max 10 characters
      if (value.length > 10) {
        errorMessage = 'Maximum 10 characters allowed';
      }
      validatedValue = value.replace(/[^a-zA-Z0-9\s-]/g, '').slice(0, 10);
    }

    // City validation
    if (field === 'city') {
      // Only letters and spaces
      if (/[^a-zA-Z\s]/.test(value)) {
        errorMessage = 'Only letters and spaces allowed';
      }
      // Max 50 characters
      if (value.length > 50) {
        errorMessage = 'Maximum 50 characters allowed';
      }
      validatedValue = value.replace(/[^a-zA-Z\s]/g, '').slice(0, 50);
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

    setFormDatatwo(prev => {
      const updated = { ...prev, [field]: validatedValue };
      logDebounced(updated);
      return updated;
    });
  };

  const countryOptions = ['United States', 'Canada', 'United Kingdom', 'Australia'];
  const stateOptions = ['New York', 'California', 'Texas', 'Florida', 'Illinois'];

  const showStateField = formDatatwo.country !== '';
  const showContactSection = formDatatwo.country !== '' && formDatatwo.state !== '';

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">

      {/* Location Section */}
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Location</h2>

        {/* Country */}
        <div className="mb-6">
          <label className="block text-blue-900 font-semibold mb-2">
            Country of residence <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formDatatwo.country}
              onChange={(e) => handleChange('country', e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-500 rounded-xl appearance-none bg-white focus:outline-none focus:border-blue-600 text-lg"
              required
            >
              <option value=""></option>
              {countryOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 pointer-events-none" size={20} />
          </div>
        </div>

        {/* State - Show only if country selected */}
        {showStateField && (
          <div className="mb-6">
            <label className="block text-blue-900 font-semibold mb-2">
              State <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={formDatatwo.state}
                onChange={(e) => handleChange('state', e.target.value)}
                className="w-full px-4 py-3 border-2 border-blue-500 rounded-xl appearance-none bg-white focus:outline-none focus:border-blue-600 text-lg"
                required
              >
                <option value=""></option>
                {stateOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 pointer-events-none" size={20} />
            </div>
          </div>
        )}
      </div>

      {/* Contact Information Section */}
      {showContactSection && (
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-blue-900 font-semibold mb-2">
              Email address <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="email"
              value={formDatatwo.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="rosa@gmail.com"
              className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:border-blue-500 text-lg`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-blue-900 font-semibold mb-2">
              Phone number <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              value={formDatatwo.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+ (254) 546 4125"
              className={`w-full px-4 py-3 border-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:border-blue-500 text-lg`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Residential Address */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-blue-900 font-semibold">
                Residential address <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={useMyAddress}
                  onChange={(e) => setUseMyAddress(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-blue-500 text-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-blue-900 font-semibold">Use my address</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                value={formDatatwo.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="124 Street Rd."
                className={`w-full px-4 py-3 border-2 ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:border-blue-500 text-lg pr-12`}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
            </div>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* ZIP Code & City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-900 font-semibold mb-2">
                ZIP code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formDatatwo.zipCode}
                onChange={(e) => handleChange('zipCode', e.target.value)}
                placeholder="12603"
                className={`w-full px-4 py-3 border-2 ${errors.zipCode ? 'border-red-500' : 'border-blue-500'} rounded-xl focus:outline-none focus:border-blue-600 text-lg`}
                required
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
              )}
            </div>

            <div>
              <label className="block text-blue-900 font-semibold mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formDatatwo.city}
                onChange={(e) => handleChange('city', e.target.value)}
                placeholder="NY"
                className={`w-full px-4 py-3 border-2 ${errors.city ? 'border-red-500' : 'border-blue-500'} rounded-xl focus:outline-none focus:border-blue-600 text-lg`}
                required
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formtwo;