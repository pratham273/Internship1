document.addEventListener("DOMContentLoaded",
function(event) {

  console.log(document.getElementById("p1"));
  function myFunc()
  {
    document.getElementById("p2").innerHTML = "Already Made.";
  }

  function Sayhello(event){
    this.textContent = "Started";
    window.alert("Ohh My God!!");

  }

  function starting()
  {
    this.textContent = "Started";
    var name = document.getElementById("name1").value;
    var message = "Hello " + name;
    document.getElementById("demo").innerHTML = message;
    window.alert(message);
    this.textContent = "Not Started";
  }


document.querySelector("button").addEventListener("click",Sayhello);
document.getElementById("but").addEventListener("click",starting);

document.getElementById("p2").addEventListener("mousemove",myFunc);

}
);
