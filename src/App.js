
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Todo from './components/Todo';
import ViewDetails from './components/ViewDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div><Todo/></div>} />
        <Route path='/view/:id' element={<div><ViewDetails/></div>} />
      </Routes>
    
    </div>
  );
}

export default App;
