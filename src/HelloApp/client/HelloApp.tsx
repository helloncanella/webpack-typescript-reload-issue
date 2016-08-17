import Hello from './Hello';
import * as React from "react";
import * as ReactDOM from "react-dom";



export default class HelloApp extends React.Component<any, any> {
  render() {
    return <Hello name="biu" />;
  }
}