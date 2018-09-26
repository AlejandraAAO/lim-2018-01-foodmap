
let restaurants= document.getElementById("restaurants");
let modales= document.getElementById("modales");


 $(document).ready(function(){
  $('.slider').slider();
});
let allPlacesInfo = [];
//primer intento con fetch 
const findPlaces = ()=>{
  fetch("data/RESTAURANTES - 2017.json_array")
    .then(response => response.json())
    .then(places => {
      //console.log(places);

      places.forEach(place => {

        let placeInfo = {
          type: place[1],
          name: place[2],
          location: place[3],
          phone: place[4],
          code: place[5]
        }
        allPlacesInfo.push(placeInfo)
        
      })
      paintPlaces(allPlacesInfo);
    })
}

const paintPlaces= (obj) =>{
  let values = Object.values(obj);
  //console.log(values);

  values.forEach( rest=>{
     // console.log(rest);  
      //caja 
      let box = document.createElement("div");
      box.setAttribute("class", "card");
      //contenido de la caja
      let boxContent = document.createElement("div");
      boxContent.setAttribute("class", "card-content");

      let boxButton = document.createElement("div");
      boxButton.setAttribute("class", "card-action");
      let  aButton = document.createElement("button");
      aButton.setAttribute("class", "btn modal-trigger")
      
      aButton.setAttribute("id", `${rest.code}`)
      let aButtonText = document.createTextNode("Info");

      let img = document.createElement("i");
      img.setAttribute("class", "material-icons medium")
      let imgName = document.createTextNode("restaurant_menu")

      let text = document.createElement("h5");
      text.setAttribute("class", "grey-text")
      let textoIn = document.createTextNode(`${rest.name}`);

      img.appendChild(imgName);
      text.appendChild(textoIn);
      aButton.appendChild(aButtonText);
      boxContent.appendChild(img)
      boxContent.appendChild(text);
      boxButton.appendChild(aButton)
      box.appendChild(boxContent);
      box.appendChild(boxButton);
      restaurants.appendChild(box);

      //modales

      let boxModal = document.createElement("div");
      
      boxModal.setAttribute("class",`modal ${rest.code}`);
      
      let modalContent = document.createElement("div");
      modalContent.setAttribute("class", "modal-content");

      let title = document.createElement("h4");
      let textTitle = document.createTextNode(`${rest.name}`);
      let imgM = document.createElement("img");
      imgM.setAttribute("src", "img/map.png");
      imgM.setAttribute("class", "responsive-img");
      title.appendChild(textTitle);
      let type=document.createElement("p");
      let typeText = document.createTextNode(`Tipo de comida :${rest.type}`);
      type.appendChild(typeText);
      let location= document.createElement("p");
      let locText = document.createTextNode(`Direccion : ${rest.location}`);
      location.appendChild(locText);
      let exit = document.createElement("button");
      exit.setAttribute("class", "close");
      let exitText = document.createTextNode("SALIR");
      exit.appendChild(exitText);

      modalContent.appendChild(title);
      modalContent.appendChild(imgM);
      modalContent.appendChild(type);
      modalContent.appendChild(location);
      modalContent.appendChild(exit);
      boxModal.appendChild(modalContent);
      modales.appendChild(boxModal);

    
    exit.addEventListener("click", ()=>{
      boxModal.style.display = "none";
    })
  })
  
}


restaurants.addEventListener("click", e =>{
  let idRest = e.target.id;
  //console.log(idRest);

  let x= document.querySelectorAll(`div.${idRest}`);
  x[0].style.display = "block";

  let b = document.querySelectorAll(`button.close`);
  console.log(b);

});

window.addEventListener("load", findPlaces);
