// FUNCTION MENGHITUNG HARGA DM EPEP SESUAI HARGA GS #2
const gs = 330;
const modalgs = 85000;
const nomdm = 140;
const ratedm = 66;

function rategs(harga) {
  harga /= gs;
  return harga;
}

modalgs;
const gsrate = rategs(modalgs);
console.log("harga gs = " + modalgs);
console.log("rate gs = " + gsrate);

function hargadm(diamond) {
    diamond *= gsrate;
    return diamond
}

ratedm;
const pricedm = hargadm(ratedm)
console.log("nominal = " + nomdm + "dm");
console.log("hargadm = " + pricedm);