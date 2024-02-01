
import { getDetails } from "./details.js";
let detailsPage=document.querySelector(".details");
const details= new getDetails();
export class UI{

  displayData(array) {
    let cartona = '';
    
    for (let i = 0; i < array.length; i++) {
      
      cartona += `<div class="col-md-6 col-lg-4 col-xl-3 g-4">
        <div class="card" data-game-id=${array[i].id}>
          <img src=${array[i].thumbnail} class="card-img-top" alt="not found">
          <div class="card-body">
            <div class="caption d-flex justify-content-between">
              <h3 class="card-title h6 small">${array[i].title}</h3>
              <span class="badge text-bg-primary p-2">Free</span>
            </div>
            <p class="card-text small text-center opacity-50">
              ${array[i].short_description}
            </p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <span class="badge">${array[i].genre}</span>
            <span class="badge">${array[i].platform}</span>
          </div>
        </div>
      </div>`;
    }
    document.querySelector("#game-data").innerHTML = cartona;
     
  
 
  }
  
  displayDetails(details) {

    let container=`<div class="col-md-6">
      <img src="${details.thumbnail}" class="w-100 alt="game">
    </div>
    <div class="col-md-6 ">
      <h3 class="text-white">Title: ${details.title}</h3>
      <p> Category: <span class="badge text-bg-info">${details.genre}</span> </p>
      <p> Platform: <span class="badge text-bg-info">${details.platform}</span> </p>
      <p> Status: <span class="badge text-bg-info">${details.status}</span> </p>
      <p class="small">${details.description}</p>
      <a href="${details.freetogame_profile_url}" class="btn btn-outline-warning text-white">Show Game</a>
    </div>`;
      
    
    
    document.getElementById("detailscontent").innerHTML = container;
  }

       

}
