import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-column logo-column">
            <div className="footer-logo">
              <img src="./logo.png" alt="Sincere Architects Logo" className="sincere-logo" />
              <p>
                Add to this beautiful world, architectural Innovations engineered by structural Inventions. Inspire till existence by monumental creations.
                Adopt professional approach, where Relations overpower business as a true World Leader. Set trends with Positive attitude to improve
                lifestyle and establish as an icon of human excellence, which is dynamic but of course... Sincere
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Home</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/awards">Awards</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Architectural Style</h3>
            <ul className="footer-links">
              <li><a href="/heritage-architecture">Heritage Architecture</a></li>
              <li><a href="/modern-architecture">Modern Architecture</a></li>
              <li><a href="/landscape-architecture">Landscape Architecture</a></li>
              <li><a href="/interior-designing">Interior Designing</a></li>
              <li><a href="/civil-engineering">Civil Engineering</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">About</h3>
            <ul className="footer-links">
              <li><a href="/mep-illumination">MEP & Illumination</a></li>
              <li><a href="/conservation-architecture">Conservation Architecture</a></li>
              <li><a href="/monuments">Monuments</a></li>
              <li><a href="/sculptures">Sculptures</a></li>
              <li><a href="/UrbanTransformation">Urban Transformation</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-left">
              <p className="address">
                <a href="https://sincerearchitects.com/" target="_blank" rel="noopener noreferrer">
                  copyright 2025. ALL rights Reserved
                </a>
              </p>
            </div>
            <div className="footer-right">
              <p className="copyright">
                <a href="https://lensclickerdigital.com/" target="_blank" rel="noopener noreferrer">
                  Developed By lensclickerdigital.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}