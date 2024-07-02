import "../App.css"
const Navbar = ({ setCategory }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <h2>News<span class="badge text-bg-secondary">Meg</span></h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item cursor-pointer">
              <div class="nav-link" onClick={() => setCategory("general")}>
                Home
              </div>
            </li>

            <li class="nav-item cursor-pointer">
              <div class="nav-link" onClick={() => setCategory("technology")}>
                Technology
              </div>
            </li>
            <li class="nav-item cursor-pointer">
                <div class="nav-link" onClick={() => setCategory("business")}>
                  Business
                </div>
              </li>
              <li class="nav-item cursor-pointer">
                <div class="nav-link" onClick={() => setCategory("entertainment")}>
                  Entertainment
                </div>
              </li>
              <li class="nav-item cursor-pointer">
                <div class="nav-link" onClick={() => setCategory("Sports")}>
                  Sports
                </div>
              </li>
              <li class="nav-item cursor-pointer">
                <div class="nav-link" onClick={() => setCategory("health")}>
                  Health
                </div>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
