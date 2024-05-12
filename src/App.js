import './resources/main.scss';
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Connection } from "./components/Connection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
        <Header />
        <Skills />
        <Projects />
        <Connection />
        <Footer />
    </>
  );
}

export default App;
