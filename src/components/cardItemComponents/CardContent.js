import React from "react";

import example from "../../assets/images/example.png";

export class CardContent extends React.PureComponent {
  render() {
    return (
      <div className="card-item__data">
        <div className="card-item__data-thub">
          <img src={example} />
        </div>
        <div className="card-item__data-detalis">
        <div className="card-item__data-detalis-stars">Stars</div>
          <div className="card-item__data-detalis-name">Name</div>
          <div className="card-item__data-detalis-info">Info</div>
        </div>
      </div>
    );
  }
}
