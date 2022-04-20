

let menu = [
  {
    name: "Buttermilk Pancakes",
    description: "i'm baby woke mlkshk wolf bitter live-edge blue bottle, hammack freegan copper mug whatever cold-pressed",
    price: 13.99,
    image: "img/nkar1.jpeg",
    lunchtype: "Breakfast"
  },
  {
    name: "Godzilla Millksake",
    description: "i'm baby woke mlkshk wolf bitter live-edge blue bottle, hammack freegan copper mug whatever cold-pressed",
    price: 6.99,
    image: "img/item-2.jpeg",
    lunchtype: "Dinner"
  },
  {
    name: "Country Delight",
    description: "i'm baby woke mlkshk wolf bitter live-edge blue bottle, hammack freegan copper mug whatever cold-pressed",
    price: 20.99,
    image: "img/item-3.jpeg",
    lunchtype: "Shakes"
  },
  {
    name: "Egg Attack",
    description: "i'm baby woke mlkshk wolf bitter live-edge blue bottle, hammack freegan copper mug whatever cold-pressed",
    price: 22.99,
    image: "img/item-4.jpeg",
    lunchtype: "Breakfast"
  },
  {
    name: "Oreo Dream",
    description: "i'm baby woke mlkshk wolf bitter live-edge blue bottle, hammack freegan copper mug whatever cold-pressed",
    price: 18.99,
    image: "img/item-5.jpeg",
    lunchtype: "Lunch"
  },
  {
    name: "Bacon  Double",
    description: "i'm baby woke mlkshk wolf bitter live-edge blue bottle, hammack freegan copper mug whatever cold-pressed",
    price: 15.99,
    image: "img/item-6.jpeg",
    lunchtype: "Shakes"
  },
  {
    name: "Diner Double",
    description: "i'm baby woke mlkshk wolf bitter live-edge blue bottle, hammack freegan copper mug whatever cold-pressed",
    price: 15.99,
    image: "img/item-7.jpeg",
    lunchtype: "Breakfast"
  },
  {
    name: "Diner Double",
    description: "i'm baby woke mlkshk wolf bitter live-edge blue bottle, hammack freegan copper mug whatever cold-pressed",
    price: 15.99,
    image: "img/item-8.jpeg",
    lunchtype: "Lunch"
  },
  {
    name: "Diner Double",
    description: "i'm baby woke mlkshk wolf bitter live-edge blue bottle, hammack freegan copper mug whatever cold-pressed",
    price: 15.99,
    image: "img/item-9.jpeg",
    lunchtype: "Shakes"
  }
]



for (let i = 0; i < document.getElementById("for-button").children.length; i++) {
  document.getElementById("for-button").children[i].addEventListener("click", () => {
    console.log(document.getElementById("for-button").children[i].innerHTML)
    filter(document.getElementById("for-button").children[i].innerHTML)
  })

}

function filter(type) {
  let list = ""
  for (let i = 0; i < menu.length; i++) {
    if (type === 'All' || type.trim() === menu[i].lunchtype) {
      list += ` <div class="head" onclick="fillData(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div class="section">
                    <img class="images" src="${menu[i].image}" alt="nkar" >
                    <div class="text">
                      <h4>${menu[i].name} <span>${menu[i].price}</span></h4>
                      <div class="gic"></div>
                      <p>${menu[i].description}</p>
                    </div>
                  </div>
                </div>`
    }
  }
  console.log(type)
  document.getElementById("menuOur").innerHTML = list
}
filter('All')
 
function fillData(i) {
  console.log(i, menu[i])
  document.querySelector('.modal-title').innerHTML=menu[i].name;
  document.querySelector('.modal-body').innerHTML = `
  <div class="section">
  <img class="images" src="${menu[i].image}" alt="nkar" >
  <div class="text">
   <span>${menu[i].price}</span>
    <div class="gic"></div>
    <p>${menu[i].description}</p>
    <input  class="inputNumber"type="number" value="0" min="0">
  </div>
</div>
 `
}
 const count=false;
  let countValue=new Promise(function(resolve,reject){
    if(count){
      resolve("the is a count value");
    }
    else{
      reject("the is no count value")
    }
  })

 console.log(countValue)

 countValue.then((result)=>{
   console.log(result)
 }).catch((res)=>{
   console.log(res)
 })