import React from 'react';

// Lazy load the remote App from the call app
const CallApp = React.lazy(() => import('call/App'));

function App() {
  return (
    <div>
      <h1>this app code of Host-app</h1>
      <React.Suspense fallback="Loading...">
        <CallApp />
      </React.Suspense>
    </div>
  );
}

export default App;
