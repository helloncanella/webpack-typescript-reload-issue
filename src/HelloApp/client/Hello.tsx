// src/HelloApp/client/Hello.jsx
import * as React from "react";
import * as ReactDOM from "react-dom";

export interface HelloProps { name: string }

export default class Hello extends React.Component<HelloProps, any>{
  // static propTypes = {
  //   name: PropTypes.string.isRequired
  // }

  render() {
    const { name } = this.props;

    return (
      <h1>Hello {name} lero</h1>
    );
  }
}