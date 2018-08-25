
let restaurants= document.getElementById("restaurants");

 $(document).ready(function(){
  $('.slider').slider();
});
let allPlacesInfo = [];
//primer intento con fetch 
const findPlaces = ()=>{
  fetch("/data/RESTAURANTES - 2017.json_array")
    .then(response => response.json())
    .then(places => {
      //console.log(places);

      places.forEach(place => {
        let placeInfo = {
          type: place[1],
          name: place[2],
          location: place[3],
          phone: place[4],
        }
        allPlacesInfo.push(placeInfo)
        
      })
      paintPlaces(allPlacesInfo);
    })
}

const paintPlaces= (obj) =>{
  let values = Object.values(obj);
  console.log(values);

  values.forEach( rest=>{
      console.log(rest);  
      //caja 
      let box = document.createElement("div");
      box.setAttribute("class", "card");
      //contenido de la caja
      let boxContent = document.createElement("div");
      boxContent.setAttribute("class", "card-content");

      let boxButton = document.createElement("div");
      boxButton.setAttribute("class", "card-action");
      let  aButton = document.createElement("a");
      aButton.setAttribute("href", "#");
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
  })
  // let box = document.createElement("div");
  // let text = document.createElement("span");
  // let textoIn = document.createTextNode()
}
// const paintPlaces= (obj)=>{
//   let aModal = document.createElement("a");
//   aModal.setAttribute("class", "btn modal-trigger");
//   aModal.setAttribute("href", `${obj.name}`)
//   let boxR = document.createElement("div");
//   boxR.style.backgroundImage="url('/img/plate.jpg')";
//   let nameR = document.createElement("h4");
//   let textNameR = document.createTextNode(`${obj.name}`);
//   nameR.setAttribute("class", "white-text");
//   nameR.appendChild(textNameR);
//   boxR.appendChild(nameR);
//   aModal.appendChild(boxR);
//   restaurants.appendChild(aModal)


// }

window.addEventListener("load", findPlaces);
