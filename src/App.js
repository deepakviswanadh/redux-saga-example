import React, { useEffect } from "react";
import { connect } from "react-redux";
import { watchGetUsers } from "./actions/users";

const App = (props) => {
  useEffect(() => {
    props.watchGetUsers();
  });
  return <div>Welcome</div>;
};

export default connect(null, { watchGetUsers })(App);
