// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
var submit = document.querySelector("#submit").addEventListener("click",myfunction)
    function myfunction(){
        event.preventDefault()
    }


// var img = document.createElement("img")
//    img.setAttribute("src","https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png")
//     document.querySelector("#img").value
//    var td = document.createElement("td")
//    img.append(td);
//    var tr = document.createElement("tr")
//    td.append(tr);
   
//    console.log(img)

//    var name = document.createElement("td")
//    name = document.querySelector("#name").value
//    var tr = document.createElement("tr")
//    td.append(tr)

//    var batch = document.createElement("td")
//    batch = document.querySelector("#batch").value

//    var dsa = document.createElement("td")
//    dsa = document.querySelector("#dsa").value

//    var skillathon = document.createElement("td")
// skillathon = document.querySelector("#cs").value

//    var coding = document.createElement("td")
//    coding = document.querySelector("#coding").value

//    var percentage = document.createElement("td")
//    percentage = ((dsa+skillathon+coding)/3)*100

//    var status = document.createElement("td")
//    status = if(percentage>50){
//        status.innerText
   }

//    var tr = document.createElement("tr")
//    td.append(tr)
//    document.querySelector("tbody").append(tr)
//    console.log(tbody)


var nam = document.querySelector("#name").value

var batch = document.querySelector("#batch").value

var dsa = document.querySelector("#dsa").value
 

var td = document.createElement("td")

var td1 = document.createElement("td")
td1.innerText = nam

var td2 = document.createElement("td")
td2.innerText = batch

var td3 = document.createElement("td")
td3.innerText = dsa

var td4 = document.createElement("td")

var td5 = document.createElement("td")

var td6 = document.createElement("td")

var td7 = document.createElement("td")

var tr = document.createElement("tr")
tr.append(td,td1,td2,td3)

document.querySelector("tbody").append(tr)
console.log(tbody)