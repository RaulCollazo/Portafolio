import { useState, useEffect } from "react";
function Navbar() {
  const elemento: string = "<DEV>";
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg ${isScrolled ? "navbar-scrolled" : "color-fondo"}`}
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#"></a>
        <span className="texto-azul" style={{ marginRight: "auto" }}>
          {elemento}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" } as React.CSSProperties}
          >
            <li className="nav-item">
              <a
                className="nav-link active texto-gris"
                aria-current="page"
                href="#"
              >
                Proyectos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link texto-gris" href="#">
                Tecnologías
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle texto-gris"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sobre mí
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Linkedin
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    GitHub
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Contacto
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
