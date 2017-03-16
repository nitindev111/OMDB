import React from "react";


export default class SearchResults extends React.Component {
    constructor(props){
        super(props);
           
    }
  render() {
      var searchResult = this.props.result;
    return (
       <div>
           <h2>Search Result for {this.props.searchInput}</h2>
           <ul className="ImagesGrid">
            
       { searchResult.map((movie,index)=>
       <div>
            <li key={index}>
            <img alt={movie.Title} src={movie.Poster} onClick={()=>this.props.getMovieData(movie)}/> </li>
            <li>{movie.Title}</li>
            <li>{movie.Year}</li>
        </div>
        )}
          </ul>
      </div>
    );
  }
}

