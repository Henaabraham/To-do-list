
function addCloseButtons() {
  let myNodelist = document.getElementsByTagName("LI");
  for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("×");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}


document.addEventListener("click", function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
  }
});


function newElement() {
  let inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  let li = document.createElement("LI");
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("×");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}


window.onload = function () {
  addCloseButtons();
};
function addTask() {
  const input = document.getElementById("task");
  if (!input.value.trim()) return;

  const li = document.createElement("li");
  li.textContent = input.value;
  li.onclick = () => li.classList.toggle("checked");

  const close = document.createElement("span");
  close.textContent = "×";
  close.className = "close";
  close.onclick = e => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(close);
  document.getElementById("list").appendChild(li);
  input.value = "";
}