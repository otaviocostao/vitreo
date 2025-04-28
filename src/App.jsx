import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import NovaVenda from './pages/NovaVenda/NovaVenda';

function App() {

  return (
    //<AuthProvider>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
                <Home />
            } 
          />
          <Route 
            path="/vendas/novo" 
            element={
                <NovaVenda />
            } 
          />
        </Routes>
      </Router>
    //</AuthProvider>
  )
}

export default App
