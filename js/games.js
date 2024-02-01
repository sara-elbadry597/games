import { UI } from "./ui.module.js";
import { getDetails } from "./details.js";
const details= new getDetails();
let categories= document.querySelectorAll(".nav-link");
let games=[];
let loader=document.querySelector(".loading");
let closeBtn=document.querySelector("#closebtn");
let detailsPage=document.querySelector(".details");
let gamesPage=document.querySelector(".games");
closeBtn.addEventListener("click",function(e){
 detailsPage.classList.add("d-none");
 gamesPage.classList.remove("d-none")
})


export class GetGames {
    constructor() {
        loader.classList.remove("d-none");
        this.getData("mmorpg");
      for (let i = 0; i < categories.length; i++) {
        categories[i].addEventListener("click", async (e) => {
        
          const clickedCategory = e.target.innerText.toLowerCase();
          document.querySelector(".navbar-nav .active").classList.remove("active");
          e.target.classList.add("active");
          loader.classList.remove("d-none");
          this.getData(clickedCategory);
        });
      }
    }
  
    async getData(Category) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'eaa579c6c3msh28e2edae6e13be2p190a5ejsn513898aeede8',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`;
     
      const data = await fetch(url, options);
      const response = await data.json();
      const games = response;
      loader.classList.remove("d-none");
      const ui = new UI();
      ui.displayData(games);
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {
          const gameId = card.getAttribute('data-game-id');
          details.showDetails(gameId);
        });
      });
    }
  }
  