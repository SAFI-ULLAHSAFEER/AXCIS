import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, XIcon, ArrowRight } from '../icons';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Partner With Us', to: '/partner' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="navbar__link">{link.label}</Link>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary navbar__cta">
          Schedule Consultation <ArrowRight />
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <XIcon /> : <Menu />}
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <Link key={link.to} to={link.to} className="navbar__mobile-link" onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="btn-primary" onClick={closeMenu}>
          Schedule Consultation <ArrowRight />
        </Link>
      </div>
    </header>
  );
}
