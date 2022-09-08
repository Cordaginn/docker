import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { First } from './components/first';
import { Second } from './components/second';
import { Third } from './components/third';
import { Home } from './components/home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="Nav">
            <Link to="/">home</Link>
            <Link to="/1">first</Link>
            <Link to="/2">second</Link>
            <Link to="/3">third</Link>
          </nav>
        </header>
      <Routes>
        <Route path="/1" element={<First />} />
        <Route path="/2" element={<Second />} />
        <Route path="/3" element={<Third />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
