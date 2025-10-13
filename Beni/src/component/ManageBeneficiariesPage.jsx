import React, { useState } from 'react';
import { AlertCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function BeneficiaryManager() {
  const navigate = useNavigate();
  const [accounts] = useState([
    {
      id: 1,
      name: 'NYU 403B Plan',
      balance: 2500.00,
      hasBeneficiaries: false
    },
    {
      id: 2,
      name: 'NYU Deferred Contribution Plan',
      balance: 500.00,
      hasBeneficiaries: false
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-2">Manage beneficiaries</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Global Designation Section */}
        <div className="bg-white rounded-lg shadow-sm p-12 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Let's start by adding beneficiaries
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Set-up one designation to apply to all your accounts by<br />
                creating a <span className="font-bold text-blue-900">global designation</span>.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transition-colors"
                onClick={() => navigate("/GlobalDesignationPage")}
                >
                
                Create global designation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="ml-8">
              <svg width="200" height="200" viewBox="0 0 200 200" className="transform scale-110">
                <circle cx="100" cy="100" r="80" fill="#2563eb" opacity="0.9" />
                <path d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z" fill="#10b981" opacity="0.8" />
                <path d="M 100 100 L 180 100 A 80 80 0 0 1 140 170 Z" fill="#06b6d4" opacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="mt-8 border-2 border-orange-300 bg-orange-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <p className="text-gray-800 font-medium">
                None of your accounts have any beneficiaries designated yet.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Individual Accounts Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Manage your individual accounts
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              Retirement accounts ({accounts.length})
            </h3>

            {accounts.map((account) => (
              <div
                key={account.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-2">
                      {account.name}
                    </h4>
                    <p className="text-gray-600">
                      Estimated balance as of today ${account.balance.toFixed(2)}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 bg-white font-semibold flex items-center gap-2 transition-colors">
                    Designate beneficiaries
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-orange-800 text-sm">
                    Your estate is designated as default until you add your own beneficiaries
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Why it's important to add beneficiaries to your account
              </h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Naming beneficiaries ensures your assets are distributed according to your wishes. It
                provides a clear inheritance path, helping your loved ones avoid legal hurdles.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white hover:text-blue-200 font-semibold transition-colors"
              >
                Learn more about the value of beneficiaries
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BeneficiaryManager;