
import * as React from "react";
import { Link } from "react-router-dom";
import"./Item.css";


class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    items:[]
    };
}
  render() {
    
    return (
      <>
     {this.props.c.map(item=>(
      <div  className="EventCard-container">
      <div className="priceTag">{item.price}</div>
     <img
        className="event-img"
        src={item.image}
        alt="sommething went wrong"
     
      />
       
      <div className="description-warper">
        <time className="time">{item.date}</time>
        <h2 className="event-title">{item.title}</h2>
        <div className="description">{item.description} </div>
        <div class="more">
          <Link class="more" to={`/event/${item.id}`}>
            More Info
          </Link> 
   
        </div>
      </div>
    </div>
     )
  ) }
  </>
    )
   
    
  
    
}
}
export default Item;


