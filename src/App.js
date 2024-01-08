import './App.css';
import Header from './Components/Header/Header';
import Community from './Components/Pages/Community/Community';
import Goal from './Components/Pages/Goal/Goal';
import Home from './Components/Pages/Home/Home';
import Reward from './Components/Pages/Reward/Reward';
import Todo from './Components/Pages/Todo/Todo';

function App() {
  return (
    <div>
      <Header/> 
      <Home/> 
      <Goal/>
      <Todo/>
      <Reward/>
  <Community/>
    
    </div>
  );
}

export default App;
