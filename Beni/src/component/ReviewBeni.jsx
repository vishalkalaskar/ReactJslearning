import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Pencil, Plus } from 'lucide-react';

export default function ReviewBeni() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState([
    {
      id: 1,
      name: 'Rosa McDougal',
      relationship: 'Spouse',
      dob: '01/14/1970',
      ssn: '-',
      country: 'United States',
      address: '124 Street Rd. New York, NY, 12603',
      phone: '254-546-4125',
      email: 'rosa@gmail.com'
    }
  ]);

  const addBeneficiary = () => {
    const newBeneficiary = {
      id: beneficiaries.length + 1,
      name: '',
      relationship: '',
      dob: '',
      ssn: '',
      country: '',
      address: '',
      phone: '',
      email: ''
    };
    setBeneficiaries([...beneficiaries, newBeneficiary]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Beneficiary Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-1">
                Rosa McDougal
              </h2>
              <p className="text-lg text-gray-600">Spouse</p>
            </div>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              {isExpanded ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <>
              {/* Information Grid */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-blue-900 mb-1">Date of birth</p>
                    <p className="text-gray-700">01/14/1970</p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-900 mb-1">SSN</p>
                    <p className="text-gray-700">-</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-blue-900 mb-1">Country of residence</p>
                  <p className="text-gray-700">United States</p>
                </div>

                <div>
                  <p className="font-bold text-blue-900 mb-1">Address</p>
                  <p className="text-gray-700">124 Street Rd. New York, NY, 12603</p>
                </div>

                <div>
                  <p className="font-bold text-blue-900 mb-1">Phone</p>
                  <p className="text-gray-700">254-546-4125</p>
                </div>

                <div>
                  <p className="font-bold text-blue-900 mb-1">Email</p>
                  <p className="text-gray-700">rosa@gmail.com</p>
                </div>
              </div>

              {/* Edit Button */}
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                <Pencil className="w-5 h-5" />
                Edit information
              </button>
            </>
          )}
        </div>

        {/* Add Another Beneficiary Button */}
        <button 
          onClick={addBeneficiary}
          className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors mb-8"
        >
          <Plus className="w-5 h-5" />
          Add another beneficiary
        </button>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-colors">
            Back
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Save & continue
          </button>
        </div>
      </div>
    </div>
  );
}