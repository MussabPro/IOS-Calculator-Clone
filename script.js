function clear1() {
  document.getElementById("result").value = 0;
}
function signchange() {
  let value = document.getElementById("result").value;
  let result = value;
  parseInt(result);
  result = -result;
  if (value == "0") document.getElementById("result").value = 0;
  else document.getElementById("result").value = result;
}
function btn(btnvalue) {
  let value = document.getElementById("result").value;
  if (value == "0") {
    if (btnvalue == "=") document.getElementById("result").value = "0";
    else document.getElementById("result").value = "" + String(btnvalue);
  } else if (btnvalue == "x")
    document.getElementById("result").value = String(value) + "*";
  else if (btnvalue == "=") {
    let result = value;
    try {
      document.getElementById("result").value = eval(result);
    } catch {
      document.getElementById("result").value = "0";
    }
  } else
    document.getElementById("result").value = String(value) + String(btnvalue);
}
