import React from "react";

export default class CardItem extends React.PureComponent {
  render() {
    const { top } = this.props;

    return (
      <div className="card-item__content" style={{ top }}>
        {/*<div className="card-glass card-item__card">
         CardContent
       </div>
       <div className="card-glass card-item__info-btn">
         . . .
       </div>
       <div className="card-glass card-buy-btn">
         Add to basket
       </div>*/}
      </div>
    );
  }
}
