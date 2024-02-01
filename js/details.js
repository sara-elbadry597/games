import { UI } from "./ui.module.js";
const loader=document.querySelector(".loading");
let detailsPage=document.querySelector(".details");
let gamesPage = document.querySelector(".games");

export class getDetails {
    async showDetails(id) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eaa579c6c3msh28e2edae6e13be2p190a5ejsn513898aeede8',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
            
            const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
            const response = await fetch(url, options);
            loader.classList.remove("d-none");
            const result = await response.json();
            const ui = new UI();
            ui.displayDetails(result);
            loader.classList.add("d-none");
            detailsPage.classList.remove("d-none");
            gamesPage.classList.add("d-none");
  
          

    }
}

        