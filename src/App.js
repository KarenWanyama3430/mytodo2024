import './App.css';
import Header from './Components/Header/Header';
import Community from './Components/Pages/Community/Community';
import Goal from './Components/Pages/Goal/Goal';
import Home from './Components/Pages/Home/Home';
import Reward from './Components/Pages/Reward/Reward';
import Todo from './Components/Pages/Todo/Todo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoMainWrapper from './Components/TodoMain/TodoMainWrapper'

function App() {
  return (
    <div>
      <Router>
      <Header/> 
      <Home/> 
      <Goal/>
      <Todo/>
      <Reward/>
  <Community/>
  </Router>
  <Routes>
  <Route path="/todomainwrapper" element={<TodoMainWrapper />} />
  </Routes>
    
    </div>
  );
}

export default App;
