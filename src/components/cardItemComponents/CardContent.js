import React from "react";

export class CardContent extends React.PureComponent {
  render() {
    return (
      <div className="card-item__data">
        <img
          className="card-item__data-thub"
          
        >Thub</img>
        <div className="card-item__data-detalis">
          <div className="card-item__data-name">Name</div>
          <div className="card-item__data-info">Info</div>
        </div>
      </div>
    );
  }
}
