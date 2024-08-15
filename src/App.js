import './resources/main.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectPage } from "./pages/ProjectPage";
import { ContactPage } from "./pages/ContactPage";
import { Navbar } from "./components/Navbar";
import { SocialMedia } from "./components/SocialMedia";

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <SocialMedia />
    </>
  );
}

export default App;
