import "./styles/team.css";
import "./screens.css";
import Card from "../common/card/Card";

const Team = () => {
  return (
    <div className="team" id="team">
      <div className="tok-title">Meet the Team</div>
      <div className="team-container">
        <div className="team-card-container">
          <Card>
            <div className="team-card">
              <img
                src={require("./../../assets/images/ceo-img.png")}
                className="team-img"
                alt="CEO Image"
              />
              <div className="team-title">He leads</div>
              <div className="team-email">drew@hedgezeppelin.com</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
        <div className="team-card-container">
          <Card>
            <div className="team-card">
              <img
                src={require("./../../assets/images/coo-img.png")}
                className="team-img"
                alt="COO Image"
              />
              <div className="team-title">Second in command</div>
              <div className="team-email">george@hedgezeppelin.com</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
        <div className="team-card-container">
          <Card>
            <div className="team-card">
              <img
                src={require("./../../assets/images/cfo-img.png")}
                className="team-img"
                alt="CFO Image"
              />
              <div className="team-title">Knows finance</div>
              <div className="team-email">john@hedgezeppelin.com</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
        <div className="team-card-container">
          <Card>
            <div className="team-card">
              <img
                src={require("./../../assets/images/cto-img.png")}
                className="team-img"
                alt="CTO Image"
              />
              <div className="team-title">Oversee technology</div>
              <div className="team-email">guru@hedgezeppelin.com</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="tok-title">Our marketing partners</div>
      <div className="team-container marketing">
        <div className="team-card-container">
          <Card>
            <div className="team-card market-card">
              <img
                src={require("./../../assets/images/market2.png")}
                className="team-img"
                alt="CEO Image"
              />
              <div className="team-title">Marketing Wizard</div>
              <div className="team-email">nathan@hedgezeppelin.com</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
        <div className="team-card-container">
          <Card>
            <div className="team-card market-card">
              <img
                src={require("./../../assets/images/market1.png")}
                className="team-img"
                alt="CEO Image"
              />
              <div className="team-title">Digital Druid</div>
              <div className="team-email">colin@hedgezeppelin.com</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;
