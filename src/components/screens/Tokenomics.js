import Card from "../common/card/Card";
import "./styles/tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="tokenomics-container" id="tokenomics">
      <div className="tok-title">Tokenomics</div>
      <div className="tok-sub-title">
        Hedge Zeppelin is a meme token at heart! $HZEP is a deflationary token
        designed to become more scarce over time. On chain holders of Hedge
        Zeppelin will earn more baby doge that is automatically sent to your
        wallet by simply holding Hedge Zeppelin tokens in your wallet. The
        community receives more HZEP from the fees generated each transaction.
      </div>
      <div className="highlight-container">
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "300px",
            }}
          >
            <img
              src={require("./../../assets/images/checkmark-icon.png")}
              style={{ width: "60px", height: "60px" }}
              alt="Checkmark"
            />
            100 Million total supply
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "300px",
            }}
          >
            <img
              src={require("./../../assets/images/checkmark-icon.png")}
              style={{ width: "60px", height: "60px" }}
              alt="Checkmark"
            />
            8% Buy/Transfer fees
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "300px",
            }}
          >
            <img
              src={require("./../../assets/images/checkmark-icon.png")}
              style={{ width: "60px", height: "60px" }}
              alt="Checkmark"
            />
            12% Sell fees
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "300px",
            }}
          >
            <img
              src={require("./../../assets/images/checkmark-icon.png")}
              style={{ width: "60px", height: "60px" }}
              alt="Checkmark"
            />
            50,000 HZEP Maximum sell per Hour
          </div>
        </Card>
      </div>
      <div className="tk-card-container">
        <Card>
          <div className="card-content">
            <img
              src={require("./../../assets/images/icons8-capital-96.png")}
              style={{ width: "180px", height: "120px", margin: "20px" }}
              alt="Capital"
            />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              7.5% soft cap –<br /> 15% hard cap
            </span>

            <span style={{ fontSize: "12px" }}>
              7,500,000 / 15,000,000 coins
            </span>
          </div>
        </Card>
        <Card>
          <div className="card-content">
            <img
              src={require("./../../assets/images/core-team.png")}
              style={{ width: "180px", height: "120px", margin: "20px" }}
              alt="Core team"
            />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              18% founders’ tokens
            </span>

            <span style={{ fontSize: "12px" }}>(Released over 18 months)</span>
          </div>
        </Card>
        <Card>
          <div className="card-content">
            <img
              src={require("./../../assets/images/liquidity.png")}
              style={{ width: "180px", height: "120px", margin: "20px" }}
              alt="Liquidity"
            />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Liquidity pool
            </span>

            <span style={{ fontSize: "12px" }}>HZEP / BNB</span>
            <span style={{ fontSize: "12px" }}>HZEP / BUSD</span>
            <span style={{ fontSize: "12px" }}>HZEP / POOP</span>
            <span style={{ fontSize: "12px" }}>HZEP / USDT</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tokenomics;
