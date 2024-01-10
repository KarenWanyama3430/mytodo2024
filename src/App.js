import { BrowserRouter ,Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Container from './Components/Container/Container';
import Goal from './Components/Goal/Goal';
import Todo from './Components/Todo/Todo';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/goals' element={<Goal/>}/>
          <Route path='/todo' element={<Todo/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
    
  
  );
}

export default App;
