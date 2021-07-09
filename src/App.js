import './App.css';
import ParticleAnimation from 'react-particle-animation'
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';

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
    </div>
  );
}

export default App;
