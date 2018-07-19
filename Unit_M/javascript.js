/* 
   Revisions Bookstore and Cafe 
   Filename: script.js

   Author:   Zion Jiam
   Date:     7/19/2018
   HTML5 and CSS3 Illustrated Unit M, Visual Workshop
 */
/* declare */
var small = document.querySelector(".smaller-size");
var defaultSize = document.querySelector(".selected-button");
var large = document.querySelector(".larger-size");
var changeWhole = document.querySelector("body");

  small.addEventListener("click",changeSizeSmall);
  defaultSize.addEventListener("click",changeSizeDefault);
  large.addEventListener("click",changeSizeLarge);

 function changeSizeSmall(){
    small.className = "selected-button";
    changeWhole.className = "smaller-size";
    defaultSize.className ="html";
    large.className="larger-size";
  }

function changeSizeDefault(){
    defaultSize.className ="selected-button";
    changeWhole.className = "html";
    small.className = "smaller-size";
    large.className="larger-size";
  }

 function changeSizeLarge(){
    large.className="selected-button";
    changeWhole.className = "larger-size";
    small.className = "smaller-size";
    defaultSize.className ="html";
  }
        


