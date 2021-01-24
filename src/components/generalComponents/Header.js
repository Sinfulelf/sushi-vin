import React from "react";
import { Link } from "react-router-dom";
import { Routing } from "../../data/routing";

export default class Header extends React.PureComponent {
  render() {
    return (
      <section className="header">
        <div className="header__left">
          <div className="header__logo">
          <Link to={Routing.Main}>Logo</Link>
          </div>
        </div>
        <div className="header__right d-flex">
          <div className="header__contacts">
            <div className="header__contacts_main">
              <h3 className="ui header no-anchor no-bg">
                <Link to={Routing.Contacts}>Contacts</Link>
              </h3>
            </div>
          </div>
          <div className="header__language">language</div>
        </div>
        <div className="header__separator"></div>
      </section>
    );
  }
}
