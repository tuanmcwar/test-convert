document.getElementById("submit").onclick = function () {
  var x = document.getElementById("username").value.slice(-6);

  //   for (var i = 0; i < x.length; i++) {}

  //   let str = "tuan";
  let strArr = x.split("");

  let test = strArr.map((i) => {
    return `"${i}"`;
  });
  console.log();

  document.getElementById("lname").value = test.join();

  //   document.getElementById("lname").value = x.slice(-6).split("");
};
