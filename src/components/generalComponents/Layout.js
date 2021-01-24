import React, { PureComponent } from "react";

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="layout-container">
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
