import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './Pages/Home/Home';
import { Print } from './Pages/Print/Print';



function App() {
  return (
    <Provider store={store}>
    <div className='app'>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/:id/print" element={ <Print/> }/>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
