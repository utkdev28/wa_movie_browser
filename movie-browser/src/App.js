
import './App.css';
import Body from './Components/Body';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Y-Movies </p>
      </header>
      <body className='App-body'>
        <Body/>
      </body>
      <footer className='App-footer'>
        <p>Browse your favourite movies on TMBD by Utkarsh </p>
      </footer>
    </div>
  );
}

