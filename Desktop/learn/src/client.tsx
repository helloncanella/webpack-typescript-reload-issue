import HelloApp from 'HelloApp/client/HelloApp';
import * as React from "react";
import * as ReactDOM from "react-dom";


Meteor.startup(() => {
  ReactDOM.render( 
    <HelloApp />,
    document.getElementById('react-app')
  );
}); 