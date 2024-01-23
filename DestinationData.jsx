import Mountain1 from "../assets/doc1.jpg";
import Mountain2 from "../assets/doc2.jpg";
import Mountain3 from "../assets/gal1.jpg";
import Mountain4 from "../assets/doc4.jpg";
import { Component } from "react";
import "./DestinationStyles.scss";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>

        <div className={this.props.text}>

          <h2>{this.props.heading}</h2>

          <p>{this.props.text}</p>
          
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />

          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
