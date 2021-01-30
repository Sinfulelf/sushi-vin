import React from "react";
import { Header } from "semantic-ui-react";

import CardItem from "../cardItemComponents";

export default class Main extends React.PureComponent {
  height = 195

  render() {
    const items = Array(15)
      .fill(0)
      .reduce((acc, i) => {
        acc.push((acc.length+1)-1);
        return acc;
      }, []);
    console.log(items);
    return (
      <div className="content__data">
        <Header as="h1">Name of group</Header>
        <div className="content__data-body">
          {items.map((x) => (
            <CardItem top={x*this.height} key={x} />
          ))}
          <div style={{
            position: 'absolute',
            top: (items[items.length - 1]+1) * this.height,
            height: 1,
            width: 1
          }}></div>
        </div>
      </div>
    );
  }
}
