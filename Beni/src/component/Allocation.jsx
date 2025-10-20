import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Eye, Info, Plus } from 'lucide-react';

export default function AssetAllocationForm() {
  const [isAccountsExpanded, setIsAccountsExpanded] = useState(true);
  const [allocateEqually, setAllocateEqually] = useState(false);
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 1, name: 'Noah McDougal', type: 'Primary', percentage: 0 },
    { id: 2, name: 'Rosa McDougal', type: 'Primary', percentage: 0 }
  ]);

  const accounts = [
    { name: 'NYU 403B', balance: 2500.00 },
    { name: 'NYU Defined Contribution', balance: 500.00 }
  ];

  const totalAllocation = beneficiaries.reduce((sum, ben) => sum + Number(ben.percentage || 0), 0);
  const remainingAllocation = 100 - totalAllocation;

  const handlePercentageChange = (id, value) => {
    const numValue = Number(value);
    
    if (numValue < 0 || numValue > 100) return;
    
    const otherBeneficiariesTotal = beneficiaries
      .filter(b => b.id !== id)
      .reduce((sum, b) => sum + Number(b.percentage || 0), 0);
    
    if (otherBeneficiariesTotal + numValue > 100) {
      return;
    }
    
    setBeneficiaries(beneficiaries.map(ben =>
      ben.id === id ? { ...ben, percentage: numValue } : ben
    ));
  };

  const handleAllocateEqually = () => {
    const newValue = !allocateEqually;
    setAllocateEqually(newValue);
    
    if (newValue) {
      const equalPercentage = Math.floor(100 / beneficiaries.length);
      const remainder = 100 % beneficiaries.length;
      
      setBeneficiaries(beneficiaries.map((ben, index) => ({
        ...ben,
        percentage: index === 0 ? equalPercentage + remainder : equalPercentage
      })));
    }
  };

  const addBeneficiary = () => {
    if (remainingAllocation <= 0) {
      alert('Cannot add more beneficiaries. Total allocation is already 100%.');
      return;
    }
    
    if (beneficiaries.length >= 100) {
      alert('Maximum 100 beneficiaries allowed.');
      return;
    }
    
    const newBeneficiary = {
      id: Math.max(...beneficiaries.map(b => b.id)) + 1,
      name: '',
      type: 'Primary',
      percentage: 0
    };
    setBeneficiaries([...beneficiaries, newBeneficiary]);
  };

  const removeBeneficiary = (id) => {
    if (beneficiaries.length <= 1) {
      alert('At least one beneficiary is required.');
      return;
    }
    setBeneficiaries(beneficiaries.filter(ben => ben.id !== id));
  };

  const handleNameChange = (id, value) => {
    setBeneficiaries(beneficiaries.map(ben =>
      ben.id === id ? { ...ben, name: value } : ben
    ));
  };

  const handleTypeChange = (id, value) => {
    setBeneficiaries(beneficiaries.map(ben =>
      ben.id === id ? { ...ben, type: value } : ben
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Tell us how you'd like to allocate your retirement assets
          </h1>
          <p className="text-xl text-gray-700">
            Customize your allocation distribution among your beneficiaries.
          </p>
        </div>

        {/* Accounts Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsAccountsExpanded(!isAccountsExpanded)}
          >
            <h2 className="text-3xl font-bold text-blue-900">
              Accounts ({accounts.length})
            </h2>
            {isAccountsExpanded ? (
              <ChevronUp className="w-6 h-6 text-blue-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-blue-600" />
            )}
          </div>

          {isAccountsExpanded && (
            <div className="mt-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Retirement accounts
              </h3>
              <div className="border-t border-gray-300 pt-4 space-y-3">
                {accounts.map((account, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-lg text-gray-800">{account.name}</span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${account.balance.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                View details
              </button>
            </div>
          )}
        </div>

        {/* Primary Beneficiaries Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold text-blue-900">
                Primary beneficiaries
              </h2>
              <Info className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg text-gray-700">Allocate equally</span>
              <button
                onClick={handleAllocateEqually}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  allocateEqually ? 'bg-blue-600' : 'bg-gray-400'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    allocateEqually ? 'transform translate-x-7' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-4 border-b-2 border-gray-300">
            <div className="col-span-4">
              <h3 className="text-lg font-bold text-blue-900">Beneficiary name</h3>
            </div>
            <div className="col-span-3">
              <h3 className="text-lg font-bold text-blue-900">Type</h3>
            </div>
            <div className="col-span-2">
              <h3 className="text-lg font-bold text-blue-900">%</h3>
            </div>
            <div className="col-span-3"></div>
          </div>

          {/* Beneficiary Rows */}
          <div className="space-y-4 mt-4">
            {beneficiaries.map((beneficiary) => (
              <div key={beneficiary.id} className="grid grid-cols-12 gap-4 items-center py-3 border-b border-gray-200">
                <div className="col-span-4">
                  <input
                    type="text"
                    value={beneficiary.name}
                    onChange={(e) => handleNameChange(beneficiary.id, e.target.value)}
                    placeholder="Enter name"
                    className="w-full text-lg text-gray-800 border-none focus:outline-none"
                  />
                </div>
                <div className="col-span-3">
                  <select
                    value={beneficiary.type}
                    onChange={(e) => handleTypeChange(beneficiary.id, e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-800 focus:border-blue-600 focus:outline-none"
                  >
                    <option value="Primary">Primary</option>
                    <option value="Contingent">Contingent</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={beneficiary.percentage}
                    onChange={(e) => handlePercentageChange(beneficiary.id, e.target.value)}
                    disabled={allocateEqually}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-800 text-center focus:border-blue-600 focus:outline-none disabled:bg-gray-100"
                  />
                </div>
                <div className="col-span-3 text-right">
                  <button
                    onClick={() => removeBeneficiary(beneficiary.id)}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Allocations */}
          <div className="flex justify-between items-center py-6 border-t-2 border-gray-300 mt-6">
            <h3 className="text-2xl font-bold text-blue-900">Total allocations</h3>
            <span className={`text-3xl font-bold ${
              totalAllocation === 100 ? 'text-green-600' : 
              totalAllocation > 100 ? 'text-red-600' : 'text-blue-900'
            }`}>
              {totalAllocation}
            </span>
          </div>

          {/* Validation Message */}
          {totalAllocation > 100 && (
            <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-4">
              <p className="text-red-800 font-semibold">
                Total allocation exceeds 100%. Please adjust the percentages.
              </p>
            </div>
          )}

          {totalAllocation < 100 && (
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 font-semibold">
                Remaining allocation: {remainingAllocation}%
              </p>
            </div>
          )}

          {/* Add Beneficiary Button */}
          <button
            onClick={addBeneficiary}
            disabled={remainingAllocation <= 0 || beneficiaries.length >= 100}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            <Plus className="w-5 h-5" />
            Add beneficiary
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-colors">
            Back
          </button>
          <button 
            disabled={totalAllocation !== 100}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Save & continue
          </button>
        </div>
      </div>
    </div>
  );
}