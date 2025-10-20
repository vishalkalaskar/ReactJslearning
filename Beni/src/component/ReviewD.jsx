import React, { useState } from 'react';
import { Eye, Pencil, Check } from 'lucide-react';

export default function ReviewBeneficiaryPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const accounts = [
    { name: 'NYU 403B', balance: 2500.00 },
    { name: 'NYU Defined contribution', balance: 500.00 }
  ];

  const primaryBeneficiaries = [
    { name: 'Noah McDougal', percentage: 50.00 },
    { name: 'Rosa McDougal', percentage: 50.00 }
  ];

  const contingentBeneficiaries = [];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Accounts Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-blue-900">Accounts</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              <Eye className="w-5 h-5" />
              View details
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-gray-300">
              <h3 className="text-xl font-bold text-blue-900">Retirement accounts</h3>
              <h3 className="text-xl font-bold text-blue-900">Estimated balance</h3>
            </div>

            {accounts.map((account, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between py-3 border-b border-gray-200"
              >
                <span className="text-lg text-blue-900">{account.name}</span>
                <span className="text-lg font-semibold text-blue-900">
                  ${account.balance.toFixed(2)}
                </span>
              </div>
            ))}

            <p className="text-gray-500 text-sm mt-4">
              Amounts shown are the estimated balance as of today
            </p>
          </div>
        </div>

        {/* Beneficiary Designations Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-blue-900">Beneficiary designations</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              <Pencil className="w-5 h-5" />
              Edit
            </button>
          </div>

          {/* Primary Beneficiaries */}
          <div className="mb-8">
            <div className="flex items-center justify-between pb-3 border-b-2 border-gray-300 mb-4">
              <h3 className="text-xl font-bold text-blue-900">Primary beneficiaries</h3>
              <h3 className="text-xl font-bold text-blue-900">%</h3>
            </div>

            {primaryBeneficiaries.map((beneficiary, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between py-3 border-b border-gray-200"
              >
                <span className="text-lg text-blue-900">{beneficiary.name}</span>
                <span className="text-lg text-blue-900">{beneficiary.percentage.toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Contingent Beneficiaries */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-gray-300 mb-4">
              <h3 className="text-xl font-bold text-blue-900">Contingent beneficiaries</h3>
              <h3 className="text-xl font-bold text-blue-900">%</h3>
            </div>

            {contingentBeneficiaries.length > 0 ? (
              contingentBeneficiaries.map((beneficiary, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between py-3 border-b border-gray-200"
                >
                  <span className="text-lg text-blue-900">{beneficiary.name}</span>
                  <span className="text-lg text-blue-900">{beneficiary.percentage.toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-600 py-4">
                You haven't designated any contingent beneficiaries yet.
              </p>
            )}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <div className="relative flex-shrink-0 mt-1">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="sr-only"
              />
              <div 
                className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-colors ${
                  termsAccepted 
                    ? 'bg-blue-600 border-blue-600' 
                    : 'bg-white border-gray-300'
                }`}
              >
                {termsAccepted && <Check className="w-4 h-4 text-white" />}
              </div>
            </div>
            <span className="text-lg text-gray-800">
              Please accept the{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                Terms and Conditions
              </a>{' '}
              to proceed.
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-10 py-4 rounded-lg text-lg transition-colors">
            Back
          </button>
          <button 
            disabled={!termsAccepted}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Submit beneficiary change
          </button>
        </div>
      </div>
    </div>
  );
}