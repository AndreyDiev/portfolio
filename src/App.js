import './App.css';
import Header from './Header';
import Devs from './Devs';
import Question from './Question';
import Projects from './Projects';
import Footer from  './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Devs />
        <Question />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
