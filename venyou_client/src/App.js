import Header from './components/Header'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path = '' element ={<Home/>}/>

      </Routes>


      </main>

    </div>
  );
}

export default App;
