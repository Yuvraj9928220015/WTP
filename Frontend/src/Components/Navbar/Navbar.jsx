import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const handleMobileDropdownToggle = (dropdown) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  // Added scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown') && !event.target.closest('.mobile-menu-btn')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const servicesItems = [
    { text: 'urban transformation', path: '/urban-transformation' },
    { text: 'heritage architecture', path: '/heritage' },
    { text: 'modern architecture', path: '/modern-architecture' },
    { text: 'landscape architecture', path: '/landscape-architecture' },
    { text: 'interior designing', path: '/interior-designing' },
    { text: 'illumination & mep', path: '/lllumination' },
    { text: 'conservation architecture', path: '/conservation' },
    { text: 'monuments', path: '/monuments' },
    { text: 'sculptures', path: '/sculptures' },
    { text: 'medical infrastructure', path: '/medical-infrastructure' },
    { text: 'hotels & resorts', path: '/hotels' }
  ];
  return (
    <>
      <div className={`Navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container-fluid">
          <div className='Navbar_container'>
            <div id='Navbar-Section' className="row w-100 align-items-center">
              <div id='Navbar_Main_list-1' className="col-2">
                <div className="Navbar_logo">
                  <div className="logo-text">
                    <a href="/"><img src="/logo-1.png" alt="Logo" /></a>
                  </div>
                </div>
              </div>

              {/* Navigation Links - col-8 */}
              <div id='Navbar_Main_list-2' className="col-8">
                <div className='Navbar_list'>
                  <ul className="nav-horizontal">
                    <li className="active">
                      <a href="/">Home</a>
                    </li>
                    <li
                      className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
                      onClick={() => handleDropdownToggle('services')}
                    >
                      <a href="#">Architecture</a>
                      <span className="dropdown-arrow icon-arrow"></span>
                      <div className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                        {servicesItems.map((item, index) => (
                          <a key={index} href={item.path} className="dropdown-item">{item.text}</a>
                        ))}
                      </div>
                    </li>
                    <li>
                      <a href="/awards">Awards & Achievements</a>
                    </li>
                    <li>
                      <a href="/sustainability">Sustainability</a>
                    </li>
                    <li>
                      <a href="/news">News</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Button - col-2 */}
              <div id='Navbar_Main_list-3' className="col-2">
                <div className='Navbar-right-side'>
                  <button className="contact-btn">
                    <span><a href="/Contact">Contact</a></span>
                  </button>
                  <div
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={handleMobileMenuToggle}
                  >
                    <span className="icon-menu"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
              <ul>
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <div
                    className="mobile-menu-header"
                    onClick={() => handleMobileDropdownToggle('services')}
                  >
                    <span>Architectural Style</span>
                    <span className={`dropdown-arrow icon-arrow ${activeMobileDropdown === 'services' ? 'open' : ''}`}></span>
                  </div>
                  <div className={`mobile-dropdown-menu ${activeMobileDropdown === 'services' ? 'show' : ''}`}>
                    {servicesItems.map((item, index) => (
                      <a key={index} href={item.path} className="mobile-dropdown-item">{item.text}</a>
                    ))}
                  </div>
                </li>
                <li>
                  <a href="/awards">Awards & Achievements</a>
                </li>
                <li>
                  <a href="/sustainability">Sustainability</a>
                </li>
                <li>
                  <a href="/news">News</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;