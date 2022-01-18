import logo from './logo.PNG';
import './App.css';
import Songs from './component/Songs/Songs';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className='app_logo' />
        <Songs/>
    </div>
  );
}

export default App;
