import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Dashboard } from "../pages/dashboard/Dashboard"


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
   </BrowserRouter>
  )
}