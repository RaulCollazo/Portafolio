function Navbar() {
  const elemento: string = "<DEV>";
  return (
    <nav className="navbar navbar-expand-lg color-fondo">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        {elemento}
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
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" } as React.CSSProperties}
          >
            <li className="nav-item">
              <a
                className="nav-link active texto-azul"
                aria-current="page"
                href="#"
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link texto-azul" href="#">
                Skills
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle texto-azul"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Projects
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
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
