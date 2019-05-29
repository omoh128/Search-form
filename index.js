//Don't forget about the SASS file 
import "./styles.scss";

const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");
//we get the first element from the array since there is only one element having this classname
const searchTitle = document.getElementsByClassName("search-title")[0];


searchIcon.onclick = function() {
    //Focus Search Bar (Expand it).
    searchBar.focus();
    //Show Search title (Concatenate the pre-defined classnames with show classname)
    searchTitle.setAttribute("class", searchTitle.className + " show");
  };


  searchBar.onblur = function() {
    //Empty the input content 
    this.value = "";
    /*Hide Search Title (replace method returns new string with provided values stripped) so simply removing show class from the class names list*/
    searchTitle.setAttribute("class", searchTitle.className.replace("show", ""));
  };


  searchBar.onkeydown = function(e) {
    //If key name is Enter show alert with current input value
    if (e.key === "Enter") alert("Searching for: " + this.value);
  }
