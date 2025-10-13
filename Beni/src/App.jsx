
//import './App.css'
import { Routes, Route } from 'react-router-dom'
import DesignateBeneficiaries from './component/DesignateBeneficiaries'
import StepperForm from './component/StepperForm'
import ManageBeneficiariesPage from './component/ManageBeneficiariesPage'
import GlobalDesignationPage   from './component/globalben'

function App() {
  
  return (
    <>
    {/* <DesignateBeneficiaries/> */}
    {/* <StepperForm/> */}
    <Routes>
      <Route path="/" element={< ManageBeneficiariesPage/>} />
      <Route path="/GlobalDesignationPage" element={< GlobalDesignationPage  />} />
    </Routes>
    </>
  )
}

export default App
