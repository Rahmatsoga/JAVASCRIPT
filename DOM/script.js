// const h1 = document.getElementById("heading");
// const para = document.getElementById("para");
// const para2 = document.getElementsByClassName("paragraph");
// const btn = document.getElementsByTagName("button");
// const h2 = document.createElement("h2");
// const body = document.body;
// const div = document.getElementById("div");
// h2.textContent = "Created using js";
// // // body.appendChild(h2);
// // div.append(h2);
// // div.prepend(h2);
// // div.after(h2);
// div.before(h2);

// // h2.insertBefore("h1");
// // console.log(para2);
// // console.log(btn);

// // console.log(h1);

// h1.innerText = "Changed By using Dom";/*Using "textContent" will return the complete text content, including the hidden text. However, using "innerText" will only return the visible text content, excluding the hidden text.*/
// h1.textContent = "Changed By Using TextContext";
// para.innerHTML = "<h2>I am Span</h2>";
// h1.outerHTML = "<p>Changed</p>";
// console.log(h1.getAttribute("id"));
// h1.setAttribute("class", "main-heading");

// para2[0].style.fontSize = "30px";

// btn[0].remove();

// const h1 = document.querySelector("#heading");
// const para = document.querySelector(".paragraph");
// const btn = document.querySelector("button");
// const para2 = document.querySelectorAll("p");
// console.log(h1);
// console.log(para);
// console.log(para2.forEach((el) => console.log(el)));
// console.log(para2);
// console.log(btn);
// h1.innerText = "Changedd";

// const btn = document.querySelector("button");

// function handleClick() {
//   console.log("Button Clicked");
// }
// btn.addEventListener("click", handleClick);

// function handleDblClick() {
//   console.log("clicked twice");
// }
// btn.addEventListener("dblclick", handleDblClick);

// function handleTheme() {
//   if (document.body.style.backgroundColor === "black") {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   } else {
//     document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
//     document.body.style.color = "white";
//   }
// }

// btn.addEventListener("click", handleTheme);

// btn.addEventListener("mouseenter", function () {
//   console.log("mouse enterd");
// });
// btn.addEventListener("mouseleave", () => {
//   console.log("mouse left");
// });

// btn.addEventListener("mousedown", () => {
//   console.log("clicked");
// });
// btn.addEventListener("mouseup", () => {
//   console.log("mouseup");
// });

// btn.addEventListener("contextmenu", () => {
//   console.log("hellow");
// });

////wednesday : 31-07-2024 ;
// const form=document.querySelector("form");

// function handleSubmit(event){
//     event.preventDefault();
//     const name=event.target[0].value;
//     const email=event.target[1].value;
//     const pass=event.target[2].value;
// console.log(`userName = ${name} email = ${email} pass = ${pass}`);
// }
// form.addEventListener("Submit",handleSubmit);
// const userName ="aslam"; //let these info are from database
// const password = "asdf";
// const email = "as@gmail.com";
// function handleSubmit(e){

//         e.preventDefault()
//     const name=e.target[0].value;
//     const mail=e.target[1].value;
//     const pass=e.target[2].value;
// console.log(`userName = ${name} email = ${email} pass = ${pass}`);
// if(name===userName && mail===email && password===pass){
//     alert("Logged in");
// } else{
// alert("wrong credentials");
// }
// name===userName && mail===email && password===pass
//  ? alert("Logged in"): alert("wrong credentials") ;
// e.target[0].value="";
// e.target[1].value="";
// e.target[2].value="";

// }
// form.addEventListener("Submit",handleSubmit);

//should have copy or run from tahir gulazar DOM folder/file wednesday whole lecture

// Asynchoronous : single thread means line by line
// console.log("first");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// // multithreading means some function run after some specific time by using call back function (in function ,functon is passed as a arguments)
// console.log("first");
// console.log("2");
// // setTimeout(()=>{
// //     console.log("3");

// // }, 3000);//3000 milli second , after 3 second ,it will comeback to this function
// // or setTimeout or setInterval
// setInterval(() => {
//   // setInterval is used for animation
//   console.log("set Interval "); //not stop
//   // for stop ,use clearInterval(2000)
// }, 3000);

// console.log("4");
// console.log("5");
// // callBack hell search on google,,,,.....one is depending on another
// // "call back hell" is most important question that asked in interview and how you can solve or what is solution for that

function info(n, getData) {
  console.log(n);
  getData();
}
info(1, () => {
  console.log("hello");
  info(2, () => {
    console.log("world");
    info(3, () => {
      console.log("world 3");
      info(3, () => {
        console.log("JavaScript");
        info(4, () => {
          console.log("JAvaScript 1");
        });
      });
    });
  });
});

// Solution for call back hell :
// promises  bnana browser ka kam ha aur promise handle krna hamara kam ha
// const Data = new Promise((resolved,rejected)=>{
//     console.log("Fetchng Data ....");
//     if(true){
//         resolved("DAta Fetched")
//     }
//     rejected("error ")
// });
// // .then is example like topper in exam write then ha dekhata ha  to others students , first .then ka baad second .then depending one another  if .then is not correct then .catch() will run taht show an error
// Data.then((res) => console.log(res)).catch((err)=> console.log(err));//display data fetched //this will do by us ,the

// const Data = new Promises((resolved,reject)=>{
//     console.log("Fethcing data .....");
//     const name = "A";
//     const error = "data not found ."
//     if(name==="A"){
//         resolved(res);
//     }
//     else {
//         reject(error);
//     }

// });
// console.log(Data);
// Data.then((res)=>{
//     console.log(res);
//     return res;
// })
// .then((res)=>{
//     const result=res + "1";
//     console.log(result);
//     return result;
// })
// .then((res)=>{
//     console.log(res + "2");

// })
// .catch((err)=> console.log(err));

// shortest way to form call back function : async automatically made it promise
// async function Data()
