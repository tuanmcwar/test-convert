// document.getElementById("submit").onclick = function () {
//   var x = document.getElementById("username").value.slice(-6);

//   //   for (var i = 0; i < x.length; i++) {}

//   //   let str = "tuan";
//   let strArr = x.split("");

//   let test = strArr.map((i) => {
//     return `"${i}"`;
//   });
//   console.log();

//   document.getElementById("lname").value = "[" + test.join() + "]";

//   //   document.getElementById("lname").value = x.slice(-6).split("");
// };
document.getElementById("submit").onclick = function () {
  var x = document.getElementById("username").value.slice(-6);
  document.getElementById("lname").value = x;

  for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
    if (i === 0) {
      console.log(x[0]);
      document.getElementById("lname0").value = x[0];
    } else if (i === 1) {
      console.log(x[1]);
      document.getElementById("lname1").value = x[1];
    } else if (i === 2) {
      console.log(x[2]);
      document.getElementById("lname2").value = x[2];
    } else if (i === 3) {
      console.log(x[3]);
      document.getElementById("lname3").value = x[3];
    } else if (i === 4) {
      console.log(x[4]);
      document.getElementById("lname4").value = x[4];
    } else if (i === 5) {
      console.log(x[5]);
      document.getElementById("lname5").value = x[5];
    }
  }

  //   let str = "tuan";
  //   let strArr = x.split("");

  //   let test = strArr.map((i) => {
  //     return `"${i}"`;
  //   });

  //   document.getElementById("lname").value = "[" + test.join() + "]";

  //   document.getElementById("lname").value = x.slice(-6).split("");
};
