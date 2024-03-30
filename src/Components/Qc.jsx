import "./style.css";
const Qc = () => {
  return (
    <div style={{ marginBottom: ".85rem",marginTop:'1rem' }}>
      <div
        style={{
          color: "var(--main-color",
          fontWeight: "bold",
          fontSize: "1.4rem",
        }}
      >
        Qualifiaction and Certification
      </div>
      <div className="qc">
        <div>
          {" "}
          <img src="jnu.png" style={{ height: "3.5rem" }} alt="" />{" "}
        </div>
        <div className="data">
          <div>MCA from</div>
          <div>Jaipur National University</div>
        </div>
      </div>
      <div className="qc">
        <div>
          {" "}
          <img src="google.png" alt="" style={{ height: "3.5rem" }} />{" "}
        </div>
        <div className="data">
          <div>Data Analytics from</div>
          <div>Google</div>
        </div>
      </div>
    </div>
  );
};

export default Qc;
