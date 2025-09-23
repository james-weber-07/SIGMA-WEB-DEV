let x = 10
let y = 7
function count(x) {
      for (i = 0; i < y; i++) {
            let z = eval(x + i)
            console.log(z);
      }
}
(async () => {
      y = await count(x);
})();