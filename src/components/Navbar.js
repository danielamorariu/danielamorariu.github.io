import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="navbar-wrapper">
            <nav className="navbar">
                <div className="inner">
                    <ul className="navbar__list navbar__list--desktop">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/skills">Skills</CustomLink>
                        <CustomLink to="/projects">Projects</CustomLink>
                        <CustomLink to="/contact">Contact</CustomLink>
                    </ul>
                    {isOpen ?
                        (
                            <ul className="navbar__list navbar__list--mobile">
                                <CustomLink to="/" onClick={toggleNavbar}>Home</CustomLink>
                                <CustomLink to="/skills" onClick={toggleNavbar}>Skills</CustomLink>
                                <CustomLink to="/projects" onClick={toggleNavbar}>Projects</CustomLink>
                                <CustomLink to="/contact" onClick={toggleNavbar}>Contact</CustomLink>
                            </ul>
                        ) : null}

                    <button className={`navbar__button ${isOpen ? 'navbar__button--open' : 'navbar__button--close'}`} onClick={toggleNavbar}>
                        </button>
                </div>
            </nav>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={`navbar__item ${isActive ? "navbar__item--active" : ""}`}>
            <Link to={to} {...props} className="navbar__link" aria-label={children}>
                <span>{children}</span>
            </Link>
        </li>
    )
}
