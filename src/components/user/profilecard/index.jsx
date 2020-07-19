import React from "react";
import "./profilecard.css";

export default function ProfileCard() {
  return (
    <div className="cards-container">
      <div className="card card-one">
        <header>
          <div className="avatar">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Jhon Doe"
            />
          </div>
        </header>

        <h3>Jhon Doe</h3>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate
          deleniti.
        </div>
        <div className="contacts">
          <a href="/test">
            <i className="fa fa-plus"></i>
          </a>
          <a href="/test">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="/test">
            <i className="fa fa-envelope"></i>
          </a>
          <div className="clear"></div>
        </div>

        <footer>
          <a href="/test">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/test">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="/test">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/test">
            <i className="fa fa-instagram"></i>
          </a>
        </footer>
      </div>

      <div className="quiz-window">
        <div className="quiz-window-header">
          <div className="quiz-window-title">Friends Suggetion</div>
        </div>
        <div className="quiz-window-body">
          <div className="gui-window-awards">
            <ul className="guiz-awards-row guiz-awards-header">
              <li className="guiz-awards-header-star">&nbsp;</li>
              <li className="guiz-awards-header-title">Name</li>
              <li className="guiz-awards-header-track"></li>
              <li className="guiz-awards-header-time">Actions</li>
            </ul>
            <ul className="guiz-awards-row guiz-awards-row-even">
              <li className="guiz-awards-star">
                <span className="star goldstar"></span>
              </li>
              <li className="guiz-awards-title">
                Golden Star
                <div className="guiz-awards-subtitle">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, laudantium?
                </div>
              </li>
              <li className="guiz-awards-track">Follow</li>
              <li className="guiz-awards-time">Delete</li>
            </ul>
            <ul className="guiz-awards-row">
              <li className="guiz-awards-star">
                <span className="star silverstar"></span>
              </li>
              <li className="guiz-awards-title">
                Silver Star
                <div className="guiz-awards-subtitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, laudantium?
                </div>
              </li>
              <li className="guiz-awards-track">
                <span className="null">Follow</span>
              </li>
              <li className="guiz-awards-time">
                <span className="null">Delete</span>
              </li>
            </ul>
            <ul className="guiz-awards-row guiz-awards-row-even">
              <li className="guiz-awards-star">
                <span className="star bronzestar"></span>
              </li>
              <li className="guiz-awards-title">
                Bronze Star
                <div className="guiz-awards-subtitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, laudantium?
                </div>
              </li>
              <li className="guiz-awards-track">Follow</li>
              <li className="guiz-awards-time">Delete</li>
            </ul>
            <ul className="guiz-awards-row">
              <li className="guiz-awards-star">
                <span className="star rhodiumstar"></span>
              </li>
              <li className="guiz-awards-title">
                Rhodium Star
                <div className="guiz-awards-subtitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, laudantium?
                </div>
              </li>
              <li className="guiz-awards-track">
                <span className="null">Follow</span>
              </li>
              <li className="guiz-awards-time">
                <span className="null">Delete</span>
              </li>
            </ul>
            <ul className="guiz-awards-row guiz-awards-row-even">
              <li className="guiz-awards-star">
                <span className="star platinumstar"></span>
              </li>
              <li className="guiz-awards-title">
                Platinum Star
                <div className="guiz-awards-subtitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, laudantium?
                </div>
              </li>
              <li className="guiz-awards-track">Follow</li>
              <li className="guiz-awards-time">Delete</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
