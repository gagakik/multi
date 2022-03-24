
import './App.scss';
import About from './pages/About'
import Header from './comp/Header'
import Nav from './comp/Nav';

function App() {
  return (
    <>
      <div className='wrapper'>
      <div className='container'>
      <Header/>
      <Nav/>
      <About/>
      </div>
      </div>
    </>
  );
}

export default App;
