import React from "react";
import { Link } from "react-router-dom";
import { Routing } from "../../data/routing";

export default class Header extends React.PureComponent {
  render() {
    return (
      <section className="main-header">
        <div className="main-header__left">
          <div className="main-header__logo">
          <Link to={Routing.Main}>Logo</Link>
          </div>
        </div>
        <div className="main-header__right d-flex">
          <div className="main-header__contacts">
            <div className="main-header__contacts_main">
              <h3 className="ui no-anchor no-bg">
                <Link to={Routing.Contacts}>Contacts</Link>
              </h3>
            </div>
          </div>
          <div className="main-header__language">language</div>
        </div>
        {/* <div className="main-header__separator"></div> */}
      </section>
    );
  }
}
