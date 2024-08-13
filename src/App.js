
import './App.css';
import Main from './components/Main/Main.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {
  return (
    <>
   <div className='split'>
    <Sidebar/>
   <Main/>
   </div>
    </>
  );
}

export default App;
