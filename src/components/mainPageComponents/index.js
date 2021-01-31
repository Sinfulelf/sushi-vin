import React from "react";
import { Header } from "semantic-ui-react";
import { AutoSizer, List } from "react-virtualized";

import CardItem from "../cardItemComponents";

export default class Main extends React.PureComponent {
  height = 222;
  list = null;

  setListRef = (ref) => {
    if (!this.list) {
      this.list = ref;
    }
  };

  rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style,
  }) => {
    return (
      <div className="list-row" key={key} style={style}>
        <CardItem />
      </div>
    );
  };

  render() {
    const items = Array(105)
      .fill(0)
      .reduce((acc, i) => {
        acc.push(acc.length + 1 - 1);
        return acc;
      }, []);
    return (
      <div className="content__data">
        <Header as="h1">Name of group</Header>
        <div className="content__data-body">
          <AutoSizer disableHeight className="main-list">
            {({ width }) => (
              <List
                ref={this.setListRef}
                width={width}
                height={items.length * this.height + 35}
                rowCount={items.length}
                rowHeight={this.height}
                rowRenderer={this.rowRenderer}
                overscanRowCount={10}
              />
            )}
          </AutoSizer>
        </div>
      </div>
    );
  }
}
