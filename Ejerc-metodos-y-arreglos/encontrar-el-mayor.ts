let entrada: number[];
new Array(8);
function x(entrada: number[]) {
  let t: number = entrada.length;
  let m: number = 0;
  if (t > 0) {
    m = entrada[0];
    if (t > 1) {
      for (let i: number = 1; i < t; i++) {
        if (entrada[i] > m) {
          m = entrada[i];
        }
      }
    }
  }
  console.log("m:" + m);
}
entrada = [5, 8, 9, 6, 4, 5, 8, 3];
x(entrada);
