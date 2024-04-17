function addtoDisplay(value) {
  document.getElementById("inputval").value += value;
}
function addtoDisplayac() {
  document.getElementById("inputval").value = "";
}
function addtoDisplaydel() {
  document.getElementById("inputval").value = "";
}
function calculate() {
    let expression = document.getElementById("inputval").value;
    var result = eval(expression);
    document.getElementById("inputval").value = result;
  }
