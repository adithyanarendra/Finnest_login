import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/' Component={Home}/>
      </Routes>
    </Router>
  )
}

export default App
