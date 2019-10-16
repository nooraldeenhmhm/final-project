// @flow
import * as React from "react";
import { Link } from "react-router-dom";
import Item from '../components/Item/Item'

/* import { NamespacesConsumer } from "react-i18next"; */

// css
import "./ItemPage.css";


class ItemPage extends React.Component {

constructor(props){
  super(props);
  this.state={

  }

  }


  render() {

    return (
    
<div className="body">

<Item c={this.props.items}/>  
</div>

    )
  }
}

export default ItemPage;