// @flow
import * as React from "react";
import { Link } from "react-router-dom";
import { NamespacesConsumer } from "react-i18next";

// css
import "components/Home/Home.scss";



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        id: 2
    };
  
  }
    
  render() {


    return (
      <NamespacesConsumer ns={["product_types", "common"]}>
        {t => (
            <React.Fragment></React.Fragment>
        )}
      </NamespacesConsumer>
    )
  }
}

export default Home;