import './App.css';
import ParticleAnimation from 'react-particle-animation'
import NavigationBar from './screens/navigation/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header/>
      <ParticleAnimation 
      style={{ height: '96vh'}} 
      numParticles={200} color={{ r: 158, g: 217, b: 249, a: 255 }} 
      background={{ r: 21, g: 22, b: 23, a: 1 }}
      particleSpeed={0.1}
      particleRadius={2}
      />
      <AboutMe />
      <Technologies />
      <Portfolio />
    </div>
  );
}

export default App;
