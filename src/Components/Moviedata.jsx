import React, { Component } from "react";

export class Moviedata extends Component {
  render() {
    let { cardstyle, poster, year, title, type, desc, Runtime } = this.props;
    return (
      <div className="col-md-3 card border-0 mb-2" style={cardstyle}>
        <img className="rounded-1" src={poster} height={"300"} alt="Title" />
        <div className="card-body">
          <div>
            <h4 className="card-title" style={{fontFamily : 'fantasy'}}>{title} </h4>
          </div>
          <div className="d-flex justify-content-between text-primary"> 
            <span className="small">
              {type.toUpperCase()} | {year}
            </span>
            <span className="small">
              {Runtime}
            </span>
          </div>
          <div>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviedata;
