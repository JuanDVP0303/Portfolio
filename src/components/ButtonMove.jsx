import propTypes from "prop-types";
const scrollTo = (elementId) => {
  document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
};

export function ButtonMove({ container, children }) {
  console.log(container)
  return (
    <button
      onClick={() => {
        document.getElementById("about-me-h2").classList.add("typing-mode");
        scrollTo(container);
      }}
      className="about-me-button"
    >
      {children}
    </button>
  );
}

ButtonMove.propTypes = {
  children: propTypes.string.isRequired,
  container: propTypes.string.isRequired,
};

export function NavbarButton({container, children}) {
  return (
    <button
      onClick={() => {
        scrollTo(container);
        document.getElementById("about-me-h2").classList.remove("typing-mode");
      }}
    >
      {children}
    </button>
  );
}


NavbarButton.propTypes = {
    children: propTypes.string.isRequired,
    container: propTypes.string.isRequired,
  };
