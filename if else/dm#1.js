// FUNCTION MENGHITUNG HARGA DM EPEP SESUAI HARGA GS #1
let gs = 330
let hargags = 90000
let nomdm = 210
let gsdm = 99


function rategs(harga) {
  console.log("harga gs = " + harga);
  harga = harga / gs;
  return harga;
}

hargags
hargags = rategs(hargags);
console.log("rate gs = " + hargags);

console.log("HARGA DM");

function hargadm(diamond) {
  nomdm
  console.log("nominal = " + nomdm + "dm");
  diamond = diamond * hargags;
  return diamond;
}

gsdm
gsdm = hargadm(gsdm);
console.log("harga dm = " + gsdm);