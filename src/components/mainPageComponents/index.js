import React from "react";
import { Button } from "semantic-ui-react";

export default class Main extends React.PureComponent {
  render() {
    return (
      <div>
        Content
        <Button style={{ margin: "2em" }}>Click Here</Button>
        <div style={{ height: 1250 }}></div>
      </div>
    );
  }
}
