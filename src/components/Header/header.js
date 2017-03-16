import React from "react";


export default class Header extends React.Component {
  render() {
    return (
     <div className="logo">
      <img id="logo" src="images/omdb-logo.png"/>
      <h3 id="searchText">Search For Your Favorite Movie...</h3>
     </div>
    );
  }
}
