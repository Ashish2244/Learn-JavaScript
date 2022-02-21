// alert("hey")
const addNewWEField = () => {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");

  newNode.setAttribute("rows", 5);
  newNode.setAttribute("placeholder", "Enter Your Another Past Experience");

  let weAddbuttonObj = document.getElementById("weAddButton");

  let mainObj = document.getElementById("work-experience");
  mainObj.insertBefore(newNode, weAddbuttonObj);
};

const addNewAQField = () => {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");

  newNode.setAttribute("rows", 5);
  newNode.setAttribute("placeholder", "Enter Your Another Academic Experience");

  let weAddbuttonObj = document.getElementById("aqAddButton");

  let mainObj = document.getElementById("academicQualification");
  mainObj.insertBefore(newNode, weAddbuttonObj);
};
const generateResume = () => {
  document.getElementById("nameT1").innerHTML =
    document.getElementById("nameField").value;

  document.getElementById("contactT").innerHTML =
    document.getElementById("conatctField").value;

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbfield").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instafield").value;

  document.getElementById("linkT").innerHTML =
    document.getElementById("linkedinField").value;

  document.getElementById("namet2").innerHTML =
    document.getElementById("nameField").value;

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("ObjectiveField").value;

  //WORK EXP

  let weArr = document.getElementsByClassName("weField");
  let str = "";

  for (const we of weArr) {
    str += `<li> ${we.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //Academic
  let aqArr = document.getElementsByClassName("eqField");
  str = "";

  for (const we of aqArr) {
    str += `<li> ${we.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str;

//Setting Profile Picture
let file=document.getElementById("picField").files[0];
//console.log(file);

let filereader=new FileReader();
filereader.readAsDataURL(file);

//console.log(filereader.result)

filereader.onloadend=function () {

    document.getElementById("imgT").src=filereader.result;
}


 document.getElementById("resume-form").style.display ='none';
document.getElementById("Resume-template").style.display='block';
};
const printResume = () => {
    window.print();
};
