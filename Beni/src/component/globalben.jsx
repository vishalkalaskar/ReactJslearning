import { useNavigate } from 'react-router-dom';
import StepperForm from './StepperForm';
import Step from './Step'

function GlobalDesignationPage() {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-2">Using a global designation</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-12">
          <div className="flex items-start gap-12">
            {/* Illustration */}
            <div className="flex-shrink-0">
              <svg width="280" height="280" viewBox="0 0 280 280" className="mt-4">
                {/* Greenhouse frame */}
                <path d="M 80 240 L 80 100 L 140 40 L 200 100 L 200 240" 
                      stroke="#7dd3c0" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="80" y1="140" x2="200" y2="140" stroke="#7dd3c0" strokeWidth="6" strokeLinecap="round"/>
                <line x1="80" y1="190" x2="200" y2="190" stroke="#7dd3c0" strokeWidth="6" strokeLinecap="round"/>
                <line x1="140" y1="40" x2="140" y2="240" stroke="#7dd3c0" strokeWidth="6" strokeLinecap="round"/>
                
                {/* Dollar coin */}
                <circle cx="140" cy="90" r="30" fill="#4F46E5"/>
                <circle cx="140" cy="90" r="24" fill="#6366F1"/>
                <text x="140" y="102" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle">$</text>
                
                {/* Pie chart segments on shelves */}
                <g transform="translate(105, 155)">
                  <circle cx="0" cy="0" r="20" fill="#10b981"/>
                  <path d="M 0 0 L 0 -20 A 20 20 0 0 1 14 14 Z" fill="#14b8a6"/>
                </g>
                
                <g transform="translate(175, 155)">
                  <circle cx="0" cy="0" r="16" fill="#0ea5e9"/>
                  <path d="M 0 0 L 0 -16 A 16 16 0 0 1 11 11 Z" fill="#06b6d4"/>
                </g>
                
                {/* Pot */}
                <path d="M 115 205 L 120 235 L 160 235 L 165 205 Z" fill="#818cf8"/>
                
                {/* Plant */}
                <ellipse cx="140" cy="200" rx="8" ry="12" fill="#14532d"/>
                <ellipse cx="135" cy="195" rx="10" ry="8" fill="#15803d"/>
                <ellipse cx="145" cy="195" rx="10" ry="8" fill="#15803d"/>
                
                {/* Watering can */}
                <ellipse cx="200" cy="220" rx="20" ry="15" fill="#6366f1"/>
                <rect x="215" y="210" width="30" height="8" rx="4" fill="#818cf8"/>
                <path d="M 200 205 Q 200 195 210 195" stroke="#818cf8" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
                How this works?
              </h2>
              
              <ul className="space-y-6 mb-12">
                <li className="flex gap-4">
                  <span className="text-blue-900 font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    All your accounts will be updated together with the same beneficiaries and allocation percentages. If you'd prefer to update accounts individually you can do so on the beneficiary home screen.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-900 font-bold text-xl flex-shrink-0">•</span>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    If any of your accounts have specific rules we'll guide you through any adjustments that may be needed.
                  </p>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={() => navigate('/')}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  style={{"border":"2px solid"}}
                >
                  Back
                </button>
                <button 
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => navigate('/StepperForm')}           
                  >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GlobalDesignationPage;