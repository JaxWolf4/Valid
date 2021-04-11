var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var subMess = document.body.querySelector(".subMess");
var separate = document.body.querySelector(".separate");
var list=[];
var pages = [
  {
    name:"Home",
    content:"Home Page"
  },
  {
    name:"About",
    content:"About me"
  },
  {
    name:"View",
    content:"View"
  },
]

function validate(){
  var messEle = document.body.querySelector(".valMess");
  var username = document.body.querySelector(".username").value;
  
  if(username === "coolStudent123"){
    messEle.innerHTML=""
    var rem = document.body.querySelector(".username");
    var div = document.body.querySelector(".validate");
    rem.remove();
    div.remove();
    open();
  }else{
    messEle.innerHTML="You didn't enter the right Username"
  }
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})
function open(){
for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="View"){
  display.innerHTML=wd;
}else{
  viewPage()
}}
function viewPage(){
  var header = document.createElement("h1");
  header.innerHTML = "View Notes";
  display.appendChild(header);
  display.innerHTML="View Notes: " + list;
  // var x = document.createElement("INPUT");
  // x.setAttribute("type", "text");
  // x.setAttribute("value", "");
  // document.body.appendChild(x);
  // var y = document.createElement("INPUT");
  // y.setAttribute("type", "text");
  // y.setAttribute("value", "");
  // document.body.appendChild(y);
  document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
     renderItems();
})}
contentWrite(pages[0].content, "Home");
}

function submit(){
   var text = document.body.querySelector(".text").value;
  var note = document.body.querySelector(".note").value;
  if(text.length>=2&&note.length>0){
    document.body.querySelector(".subMess").innerHTML=""
    list.push(text+ " " + note)
}else{ 
document.body.querySelector(".subMess").innerHTML="You didn't have enough letters, or you didn't list the importance"}}
  
function renderItems(){
   document.body.querySelector(".display").innerHTML="";
  for(var i=0; i<list.length; i++){
    var ele=document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}