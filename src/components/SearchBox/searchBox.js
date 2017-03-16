import React from "react";
import axios from "axios";
import SearchResult from "./../Searchresults/searchresult"
import SearchDescription from "./../SearchDescription/searchdescription";

export default class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchValue:"",
            searchResult:[],
            selectedMovie:"",
            selectedMovieData:""
        }
        this.getMovieData = this.getMovieData.bind(this);
        this.getSearchResult=this.getSearchResult.bind(this);
    }

   getSearchResult(searchKeyword){
      if(searchKeyword===""||searchKeyword===undefined){
          alert("enter a value");
      }
      else{
    axios.get("http://www.omdbapi.com/?s="+searchKeyword).then(response=>{
        this.state.searchResult = response.data.Search;
        this.state.selectedMovie="";
        this.state.selectedMovieData="";
        this.forceUpdate();
    })
      }
   }


   getMovieData(movie){
    axios.get("http://www.omdbapi.com/?i="+movie.imdbID).then(response=>{
       this.state.selectedMovieData = response.data;
        this.forceUpdate();
    })


   }

  render() {
    return (
      <div className="SearchArea">
      <input id="SearchInput" type="text" onChange={(event)=>this.state.searchValue=event.target.value}/>
      <input id="SearchButton" type="button" value="Search" onClick={()=>this.getSearchResult(this.state.searchValue)}/>
       <h2>THE LARGEST ONLINE MOVIE DATABASE</h2>
      <SearchResult result = {this.state.searchResult} searchInput={this.state.searchValue} getMovieData={this.getMovieData}/>
      <SearchDescription movieSelected={this.state.selectedMovieData}/>
     
      </div>
    );
  }

}

