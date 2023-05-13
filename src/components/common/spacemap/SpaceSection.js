import "./space.css";

const SpaceSection = ({ title, status, phases }) => {
  const isInProgress = phases.some((items) => items.status === "IN PROGRESS");

  return (
    <div
      className="space-section-container"
      style={{ color: status === "DONE" ? "goldenrod" : "" }}
    >
      <div
        className={`rocket-container ${isInProgress ? "center-rocket" : ""}`}
      >
        <img
          src={require("./../../../assets/images/rocket.png")}
          width="50px"
          height="120px"
          className={`moving-space-image ${
            status === "IN PROGRESS" ? "active-rocket" : ""
          }`}
          alt="Flying rocket"
        />
      </div>
      <div className="bar-container">
        <div
          className={`bar ${
            status === "DONE" || isInProgress ? "bar-done" : ""
          }`}
        >
          {/* <span
            className={`dot-start ${
              status === "DONE" || isInProgress ? "dot-done" : ""
            }`}
          /> */}
        </div>
        <div className={`bar ${status === "DONE" ? "bar-done" : ""}`}>
          {/* <span
            className={`dot-start ${
              status === "DONE" || isInProgress ? "dot-done" : ""
            }`}
          /> */}
        </div>
        <span
          className={`dot-start ${
            status === "DONE" || isInProgress ? "dot-done" : ""
          }`}
        />
      </div>

      <div className="section-data-container">
        <h1 className="sec-title">{title}</h1>
        {phases.map((item) => (
          <div
            className="sec-sub-section"
            style={{ color: item.status === "DONE" ? "goldenrod" : "" }}
          >
            <h2 className="sub-sec-title">Phase # {item.id}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceSection;