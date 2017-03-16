import React from "react";
import axios from "axios";


export default class SearchDescription extends React.Component {
    constructor(props){
        super(props);
    }

  render() {
     var movieData = this.props.movieSelected;
    return (
        <div className="Description">
             
             <h2>{movieData.Title}</h2>
             <img src={movieData.Poster}/>
             <h3>{movieData.Released}</h3>
             <h4>{movieData.Actors}</h4>
             <p>{movieData.Plot}</p>
    
    </div>
  )}

}

