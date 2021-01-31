import React from "react";

import { CardContent } from "./CardContent";

export default class CardItem extends React.PureComponent {
  render() {
    const { top } = this.props;

    return (
      <div className="card-item">
        <div className="card-item__content">
          <CardContent />
          <div className="card-item__info-btn">
            ⬤&nbsp;&nbsp;&nbsp;⬤&nbsp;&nbsp;&nbsp;⬤
          </div>
          <div className="card-item__buy-btn">Add to basket</div>
        </div>
      </div>
    );
  }
}
