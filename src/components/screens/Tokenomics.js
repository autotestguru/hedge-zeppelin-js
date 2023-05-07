import Card from "../common/card/Card";
import "./styles/tokenomics.css";

const Tokenomics = () => {
  const data = [
    ["Public listing", "40%"],
    ["Private sale", "15%"],
    ["Investment wallet", "15%"],
    ["Locked tokens", "10%"],
    ["Liquidity pool", "10%"],
    ["Marketing budget", "5%"],
    ["Core team", "5%"],
  ];

  return (
    <div className="tokenomics-container" id="tokenomics">
      <div className="tok-title">Tokenomics</div>
      <div className="tok-sub-title">
        Hedge Zeppelin is a meme token at heart! $HDZ is a deflationary token
        designed to become more scarce over time. On chain holders of Hedge
        Zeppelin will earn more baby doge that is automatically sent to your
        wallet by simply holding Hedge Zeppelin tokens in your wallet. The
        community receives more HDZ from the fees generated each transaction.
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
            />
            50,000 HDZ Maximum sell per Hour
          </div>
        </Card>
      </div>
      <div className="tk-card-container">
        <Card>
          <div className="card-content">
            <img
              src={require("./../../assets/images/icons8-capital-96.png")}
              style={{ width: "180px", height: "120px", margin: "20px" }}
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
            />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Liquidity pool
            </span>

            <span style={{ fontSize: "12px" }}>HDZ / BNB</span>
            <span style={{ fontSize: "12px" }}>HDZ / BUSD</span>
            <span style={{ fontSize: "12px" }}>HDZ / POOP</span>
            <span style={{ fontSize: "12px" }}>HDZ / USDT</span>
          </div>
        </Card>
        {/* <Card>
          <div className="card-content">
            <img
              src={require("./../../assets/images/reward.png")}
              style={{ width: "180px", height: "120px", margin: "20px" }}
            />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Reward for holders
            </span>

            <span style={{ fontSize: "12px" }}>
              Accumulated on each buy/sell
            </span>
          </div>
        </Card> */}
      </div>
    </div>
  );
};

export default Tokenomics;
