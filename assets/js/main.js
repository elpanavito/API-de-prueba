window.onload = function(){
  fetch('https://zelda-api.apius.cc/api/games')
  .then(res => res.json())
  .then(res => {
   let caja = document.getElementById("game");

   caja.innerHTML = '';

   res.data.forEach(function(game, index) {
   let item=`
   <ul class="game_item">
       <li class="name"><span>${game.name}</span></li>
       <li class="description"><span>${game.description}</span></li>
       
       <ul class = dev_box>
          <li class="developer"><span>Developer: ${game.developer}</span></li>
          <li class="publisher"><span>Publisher: ${game.publisher}</span></li>
          <li class="release_date"><span>Release Date: ${game.released_date}</span></li>
       </ul>
   </ul>
   `;
   caja.innerHTML += item;
   });
   });
  }