import "./components.css";

const Button = ({ children, outlined = false }) => {
  return (
    <div>
      <button className={[outlined ? "outlined" : undefined]}>
        <span></span>
        {children}
        <span></span>
      </button>
    </div>
  );
};

export default Button;
