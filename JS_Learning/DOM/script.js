console.log("====== API getElementsByTagName() to select element by tag name  =====");
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies";

console.log("====== API getElementById() to select element by id  =====");
const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

console.log("====== API getElementsByClassName() to select element class Name  =====");
const elementLi =document.getElementsByClassName("liItem");
console.log(elementLi[1].innerHTML);

console.log("====== API querySelector() to select element by id  =====");
const elementProfileByQuery = document.querySelector("#profile");
console.log(elementProfileByQuery);

console.log("====== API querySelector() to select element by class  =====");
const elementByQuery= document.querySelector(".liItem");
console.log(elementByQuery);

console.log("====== API querySelectorAll() to select element by class  =====");
const elementsByQuery = document.querySelectorAll(".liItem");
elementsByQuery[3].innerHTML = "Oracle Database";
console.log(elementsByQuery[3]);

console.log("====== Changing the attribute of an element =====");
const elementMyProfile = document.querySelector("#myProfile");
elementMyProfile.setAttribute("href", "https://www.linkedin.com/");
console.log(elementMyProfile);

console.log("====== Changing the CSS properties =====");
const elementTechStack = document.querySelector("#techStack");
elementTechStack.style.color = "red";
elementTechStack.style.fontFamily = "Arial";

console.log("====== Remove Element =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);

console.log("====== Adding Element =====");
const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
const elementText = document.createTextNode("Team Size - 7");
elementP.appendChild(elementText);
elementDiv.appendChild(elementP);


const elementAddress = document.querySelector("#address");
elementAddress.addEventListener("click", ()=> {
    console.log("Listening click event.....");
    // alert("You have clicked on address");
    const inputValue = prompt("This is the title", "Default value");
    console.log(inputValue);

});

elementAddress.addEventListener("mouseover", () => {
    console.log("Mouse over....");
    elementAddress.style.color = "red";
});


function show(){
    console.log("Click event.....");
}

const isEvenButton = document.querySelector("#isEvenButton");
isEvenButton.addEventListener('click', () => {
    const inputValue = prompt("Please enter number to check..", 0);
    const givenNum = +inputValue;
    if (inputValue==null || isNaN(givenNum) || givenNum<0) {
        alert("Invalid value");
    }else{
        const result = inputValue%2==0 ? true : false;
        if(result){
            alert("Given Number is Even");
        }else{
            alert("Given number is Odd");
        }
    }
} );


const confirmElement = document.querySelector("#confirm");
confirmElement.addEventListener('click',  () => {
   const result = confirm("Are you sure ?");
   console.log(result);
});











