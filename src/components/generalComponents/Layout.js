import React, { PureComponent } from "react";
import Header from "./Header";

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="layout-container">
        <div className="layout-container__data">
          <Header />
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
