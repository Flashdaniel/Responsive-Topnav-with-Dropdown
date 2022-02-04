import "./styles.css";

export default function App() {
  function toggleTopnav() {
    const navbar = document.getElementById("myNavbar");

    if (navbar.className === "navbar") {
      navbar.classList.add("responsive");
    } else {
      navbar.className = "navbar";
    }
  }

  return (
    <>
      <div id="myNavbar" className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#home">News</a>
        <a href="#home">Contact</a>
        <div className="dropdown">
          <button className="dropbtn">
            Dropdown <i class="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#home">Link1</a>
            <a href="#home">Link2</a>
            <a href="#home">Link3</a>
          </div>
        </div>
        <a href="#home">About</a>
        <button className="icon" onClick={toggleTopnav}>
          &#9776;
        </button>
      </div>

      <div style={{ paddingLeft: "16px" }}>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
      </div>
    </>
  );
}
