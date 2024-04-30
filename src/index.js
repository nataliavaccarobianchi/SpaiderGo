import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './views/components/App';
import Utilitario from "./views/components/Form-Utilitario"
import Auto from "./views/components/Form-Auto"

export default function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="formUtilitario" element={<Utilitario />} />
        <Route path="formAuto" element={<Auto />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);