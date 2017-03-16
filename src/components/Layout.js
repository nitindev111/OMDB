import React from "react";


import Header from "./Header/header";
import Search from "./SearchBox/searchBox";
import SearchResult from "./Searchresults/searchresult";


export default class Layout extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <Search/>
            </div>
        )
    }
}