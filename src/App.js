import './resources/main.scss';
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
        <Header />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
