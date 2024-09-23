import React, { Component } from "react";

export class Moviedata extends Component {
  render() {
    let { cardstyle, poster, year, title, type } = this.props;
    return (
      <div className="col-md-3 card border-0 mb-2" style={cardstyle}>
        <img className="rounded-1" src={poster} height={"300"} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{title} </h4>
          <span className="small">{type} | {year}</span>
          <p className="card-text">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ipsa ad empore repellat, numquam
              modi a veritatis et laboriosam vel?
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Moviedata;
