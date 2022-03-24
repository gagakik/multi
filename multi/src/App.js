
import './App.scss';
import About from './pages/About'
import Header from './comp/Header'

function App() {
  return (
    <>
      <div className='wrapper'>
      <div className='container'>
      <Header/>
      <About/>
      </div>
      </div>
    </>
  );
}

export default App;
