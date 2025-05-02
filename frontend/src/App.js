import Button from './Components/button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hi there click the button. <br />
        </p>
          <Button url = 'https://www.google.com' text = 'Going to Google'/>
          <Button url = 'https://www.youtube.com' text = 'Going to Youtube'/>
          <Button url = 'https://www.facebook.com' text = 'Going to Facebook'/>
        
      </header>
    </div>
  );
}

export default App;
