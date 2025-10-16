import React, { useState } from 'react';
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

  // Handle input changes
  const handleChange = (field, value) => {
    setFormDatatwo(prev => {
      const updated = { ...prev, [field]: value };
      sessionStorage.setItem("formTwoData", JSON.stringify(updated)); // ✅ Correct session key
      console.log("Form Two Data Saved:", updated);
      return updated;
    });
  };

  const countryOptions = ['United States', 'Canada', 'United Kingdom', 'Australia'];
  const stateOptions = ['New York', 'California', 'Texas', 'Florida', 'Illinois'];

  // Conditions for dynamic UI rendering
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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-lg"
            />
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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-lg"
            />
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
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-lg pr-12"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
            </div>
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
                className="w-full px-4 py-3 border-2 border-blue-500 rounded-xl focus:outline-none focus:border-blue-600 text-lg"
                required
              />
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
                className="w-full px-4 py-3 border-2 border-blue-500 rounded-xl focus:outline-none focus:border-blue-600 text-lg"
                required
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formtwo;