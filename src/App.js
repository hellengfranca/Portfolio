import logo from './logo.svg';
import './App.css';
import { MyNavBar } from './components/NavBar';
import { MyBanner } from './components/Banner';
import { MySkills } from './components/Skills';
import { MyProjects } from './components/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyBanner />
      <MySkills />
      <MyProjects />
    </div>
  );
}

export default App;
