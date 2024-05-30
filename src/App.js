import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import { Route, Routes } from 'react-router-dom';
import Counter from './component/Counter';
import Texteditor from './component/Texteditor';
import UserForm from './component/UserForm';

function App() {
  return (
    <div >
     
     <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='counter' element={<Counter />}></Route>
      <Route path='userform' element={<UserForm />}></Route>
      <Route path='texteditor' element={<Texteditor />}></Route>
      </Routes>
    </div>
  );
}


export default App;
