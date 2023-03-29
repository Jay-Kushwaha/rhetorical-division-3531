

// async function fetchApi(){
//     try{
//         let res = await fetch("")
//         let data = await res.json();
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
   
// }
// fetchApi();


let data1=[]

var oXHR = new XMLHttpRequest();
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "./csvjson.json", true); // get json file.
oXHR.send();
let filterdata=[];
function reportStatus() {
  if (oXHR.readyState == 4) {
    // Check if request is complete.

    // Create an HTML table using response from server.
    let data = JSON.parse(this.responseText);

    data1=data
    // filterdata=data
    
   

    show(data1);
  }
}

let cont = document.getElementById("cont");
function show(data){
    cont.innerHTML = null;
    data.forEach((el,index)=>{

  let card = document.createElement("div");
  let img = document.createElement("img");
  let rating = document.createElement("p");
  let tag = document.createElement("p");

  let sym = document.createElement("span");
  let price = document.createElement("span");
  let des = document.createElement("p");

  img.src = el["tile-image src"]
  rating.innerText = el["sr-only"]
  tag.innerText = el["text-sale"];
  sym.textContent = el["price-curreny-symbol"];
  price.innerText = el["price-currency-text"];
  des.innerText = el["link"]

  card.append(img,rating,tag,sym,price,des);

  cont.append(card)
    })
}
