var input = document.getElementById("input");

var button = document.getElementById("button");
button.addEventListener("click", function () {
  var n = parseInt(input.value, 10);
  // factorial
  input.value = factorial(n);
});
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return factorial(n - 1) * n;
}

b1.addEventListener("click", function () {
  document.body.style.backgroundImage =
    "url(https://i.pinimg.com/564x/16/f7/77/16f7774f4b6d7aa7dbdd9c17b4057c90.jpg)";
});

b2.addEventListener("click", function () {
  document.body.style.backgroundImage =
    "url(https://i.pinimg.com/564x/8b/c9/84/8bc9841fd63a2168f58cbf8921edabb1.jpg)";
});

b3.addEventListener("click", function () {
  document.body.style.backgroundImage =
    "url(https://i.pinimg.com/564x/18/ba/e2/18bae27f1f8703b1257c13630cdb0937.jpg)";
});

b4.addEventListener("click", function () {
  document.body.style.backgroundImage =
    "url(https://i.pinimg.com/564x/06/8c/34/068c344149f7dbe1c4a498dcb0aa6419.jpg)";
});
b5.addEventListener("click", function () {
    document.body.style.backgroundImage =
      "url(https://kpoplat.com/wp-content/uploads/2021/04/felix-stray-kids-kpoplat.jpg)";
  });