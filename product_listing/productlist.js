

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


    localStorage.setItem("nil", JSON.stringify(data))
console.log(data)
    // data1=data.filter(e=>{
    //   e["price-currency-text"]
    // })

    data1= data;
    // filterdata=data
    show(data1)
  }
}

data1 = JSON.parse(localStorage.getItem("nil"))||[];
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
  img.alt = "error"
  rating.innerText = el["sr-only"]
  tag.innerText = el["text-sale"];
  sym.textContent = el["price-curreny-symbol"];
  price.innerText = el["price-currency-text"];
  des.innerText = el["link"]

  card.append(img,rating,tag,sym,price,des);

  cont.append(card)
    })
}

show(data1)










// let cont = document.getElementById("cont");
// function show(data){
//     cont.innerHTML = null;
//     data.forEach((el,index)=>{

//   let card = document.createElement("div");
//   let img = document.createElement("img");
//   let rating = document.createElement("p");
//   let tag = document.createElement("p");

//   let sym = document.createElement("span");
//   let price = document.createElement("span");
//   let des = document.createElement("p");

//   img.src = el["tile-image src"]
//   img.alt = "error"
//   rating.innerText = el["sr-only"]
//   tag.innerText = el["text-sale"];
//   sym.textContent = el["price-curreny-symbol"];
//   price.innerText = el["price-currency-text"];
//   des.innerText = el["link"]

//   card.append(img,rating,tag,sym,price,des);

//   cont.append(card)
//     })
// }


// let cont = document.getElementById("cont");

// function show(data, sortProperty, sortOrder) {
//   cont.innerHTML = null;
  
//   // Filter the data based on the specified sorting direction
//   let filteredData = data.filter(el => el[sortProperty]);
//   if (sortOrder === "high-to-low") {
//     filteredData.sort((a, b) => b[sortProperty] - a[sortProperty]);
//   } else if (sortOrder === "low-to-high") {
//     filteredData.sort((a, b) => a[sortProperty] - b[sortProperty]);
//   }

//   filteredData.forEach((el, index) => {
//     let card = document.createElement("div");
//     let img = document.createElement("img");
//     let rating = document.createElement("p");
//     let tag = document.createElement("p");
//     let sym = document.createElement("span");
//     let price = document.createElement("span");
//     let des = document.createElement("p");

//     img.src = el["tile-image src"]
//     img.alt = "error"
//     rating.innerText = el["sr-only"]
//     tag.innerText = el["text-sale"];
//     sym.textContent = el["price-curreny-symbol"];
//     price.innerText = el["price-currency-text"];
//     des.innerText = el["link"]

//     card.append(img, rating, tag, sym, price, des);
//     cont.append(card);
//   });
// }


let highToLowBtn = document.getElementById("sort-high-to-low");
let lowToHighBtn = document.getElementById("sort-low-to-high");




highToLowBtn.addEventListener("click",sortAsc)

 function sortAsc(){
 let sortedout = data1.sort(function(a,b){
    return b["price-currency-text"]- a["price-currency-text"]
  })
console.log(sortedout)
  show(sortedout)
}

lowToHighBtn.addEventListener("click",sortDes)

function sortDes(){
  let sortedout = data1.sort(function(a,b){
    return a["price-currency-text"]- b["price-currency-text"]
  })
  console.log(sortedout)
  show(sortedout)
}



function slideshow(slide){

    
    Imagein = 0;
    let firstImage = document.getElementById("fImage");

let upImage = document.createElement("img");
upImage.src = slide[0]
firstImage.append(upImage)

setInterval(function(){
   Imagein++;

   if(Imagein==slide.length-1){
    Imagein=0;
   }
   upImage.src = slide[Imagein];

   firstImage.append(upImage);

 

},2000)

}



let slide = ["https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36c/on/demandware.static/-/Sites-oss-Library/default/dwb0001406/ca-images/plp-tiles/2023/FBB_PLP_SHAPEWEAR_Desktop.jpg?yocs=j_m_",
"https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36c/on/demandware.static/-/Sites-oss-Library/default/dw77b00ba8/ca-images/plp-tiles/2023/FBB_PLP_SLIPS_Desktop.jpg?yocs=j_m_",
"https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36c/on/demandware.static/-/Sites-oss-Library/default/dwb0001406/ca-images/plp-tiles/2023/FBB_PLP_SHAPEWEAR_Desktop.jpg?yocs=j_m_",
"https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.36c/on/demandware.static/-/Sites-oss-Library/default/dw77b00ba8/ca-images/plp-tiles/2023/FBB_PLP_SLIPS_Desktop.jpg?yocs=j_m_"
]

window.addEventListener("load", function () {

slideshow(slide)
// add event-listeners;
});