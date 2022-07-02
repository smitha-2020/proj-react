
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Todo from './components/Todo';
import ViewDetails from './components/ViewDetails';
import Err404 from './components/Err404';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div><Todo/></div>} />
        <Route path='/view/:id' element={<div><ViewDetails/></div>} />
        <Route path="*" element={<div><Err404/></div>}/>
      </Routes>
    
    </div>
  );
}

export default App;
