import './resources/main.scss';
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/Navbar/NavBar";

function App() {
  return (
    <div className="main">
        <Header />
        <NavBar />
    </div>
  );
}

export default App;
