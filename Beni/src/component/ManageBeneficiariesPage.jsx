import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, AlertCircle, ChevronDown, ChevronUp, ArrowRight, ExternalLink } from 'lucide-react';

export default function ManageBeneficiaries() {
  const navigate = useNavigate();
  const [expandedAccount, setExpandedAccount] = useState('NYU Pension Plan');

  const accounts = [
    {
      id: 1,
      name: 'NYU 403B',
      balance: '$0.00',
      date: '{00/00/0000}',
      hasBeneficiaries: true,
      contracts: null,
      showButton: false
    },
    {
      id: 2,
      name: 'NYU Pension Plan',
      balance: '$0.00',
      date: '{00/00/0000}',
      hasBeneficiaries: false,
      contracts: 2,
      showButton: true
    }
  ];

  const toggleAccount = (accountName) => {
    setExpandedAccount(expandedAccount === accountName ? null : accountName);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-8 px-6">
        <h1 className="text-4xl font-bold">Manage beneficiaries</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Intro Section */}
            <div className="mb-8">
              <div className="flex items-start gap-8 mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Let's start by setting up your beneficiaries
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Once you add beneficiaries, you can designate your assets and apply the changes to all accounts.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-colors">
                    Add beneficiaries
                    <ArrowRight size={20} />
                  </button>
                </div>
                <div className="hidden md:block">
                  <div className="relative">
                    <Heart size={80} fill="#3B82F6" stroke="#1E3A8A" strokeWidth={3} className="text-blue-600" />
                    <div className="absolute -bottom-4 -right-4">
                      <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                        <path d="M20 40 Q30 20, 50 30 Q70 40, 80 35" stroke="#1E3A8A" strokeWidth="6" fill="none" strokeLinecap="round"/>
                        <path d="M40 50 Q50 55, 60 50" stroke="#1E3A8A" strokeWidth="6" fill="none" strokeLinecap="round"/>
                        <path d="M30 60 Q40 65, 50 60" stroke="#1E3A8A" strokeWidth="6" fill="none" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Accounts Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your accounts</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Retirement (2)
                </h3>
              </div>

              {/* Account Cards */}
              <div className="space-y-4">
                {accounts.map((account) => (
                  <div key={account.id} className="bg-white border border-gray-200 rounded-lg">
                    {/* Account Header */}
                    <div 
                      className="p-6 cursor-pointer flex items-center justify-between"
                      onClick={() => toggleAccount(account.name)}
                    >
                      <div className="flex items-center gap-3">
                        <AlertCircle className="text-orange-500" size={24} />
                        <div>
                          <h4 className="text-lg font-bold text-blue-900">{account.name}</h4>
                          <p className="text-sm text-gray-600">
                            Estimated balance {account.balance} (as of {account.date})
                          </p>
                        </div>
                      </div>
                      {expandedAccount === account.name ? (
                        <ChevronUp className="text-blue-600" size={24} />
                      ) : (
                        <ChevronDown className="text-blue-600" size={24} />
                      )}
                    </div>

                    {/* Expanded Content */}
                    {expandedAccount === account.name && (
                      <div className="px-6 pb-6">
                        {!account.hasBeneficiaries && (
                          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 mb-4 flex items-start gap-3">
                            <AlertCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                            <p className="text-gray-800">
                              You haven't designated beneficiaries for this account.
                            </p>
                          </div>
                        )}
                        
                        {account.contracts && (
                          <p className="text-gray-700 mb-4">
                            This account includes {account.contracts} contracts.{' '}
                            <a href="#" className="text-blue-600 underline hover:text-blue-700">
                              View details
                            </a>
                          </p>
                        )}

                        {account.showButton && (
                          <button  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
                           onClick={() => navigate('/GlobalDesignationPage')}
                            >
                            Add beneficiaries
                            <ArrowRight size={20} />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info Box */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
              <div className="flex items-start gap-4 mb-4">
                <svg className="flex-shrink-0" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#1E3A8A" strokeWidth="2" fill="none"/>
                  <path d="M20 10 L20 22 L28 18" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-xl font-bold text-blue-900">
                  Why you should add beneficiaries to your account
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Naming beneficiaries ensures your assets are distributed according to your wishes. It provides a clear inheritance path, helping your loved ones avoid legal hurdles.
              </p>
              <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700">
                Learn more about beneficiaries
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}