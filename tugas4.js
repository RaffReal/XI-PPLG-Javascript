var daffa = 162;
var habib = 164;
var rafly = 160;

if (daffa > rafly) {
  if (daffa > habib) {
    console.log("Daffa adalah siswa yang tertinggi - " + daffa);
  } else {
    console.log("Daffa adalah siswa yang tertinggi Kedua - " + daffa);
  }
} else {
  if (daffa < rafly) {
    console.log("Daffa adalah siswa yang terpendek - " + daffa);
  } else {
    console.log("Daffa adalah siswa yang terpendek kedua - " + daffa);
  }
}

console.log("");
console.log("RUMUS PERTAMA");
console.log("Urutan Siswa Dari Yang Tertinggi Ke Yang Pendek");

if (daffa > rafly) {
  if (daffa > habib) {
    console.log("Daffa adalah siswa yang tertinggi pertama - " + daffa);
    console.log("Habib adalah siswa yang tertinggi kedua - " + habib);
    console.log("Rafly adalah siswa yang terpendek - " + rafly);
  } else {
    console.log("Habib adalah siswa yang tertinggi Pertama - " + habib);
    console.log("Daffa adalah siswa yang tertinggi Kedua - " + daffa);
    console.log("Rafly adalah siswa yang terpendek - " + rafly);
  }
} else {
  if (daffa < rafly) {
    console.log("Habib adalah siswa yang tertinggi pertama - " + habib);
    console.log("Rafly adalah siswa yang tertinggi kedua - " + rafly);
    console.log("Daffa adalah siswa yang terpendek - ") + daffa;
  } else {
    console.log("Habib adalah siswa yang tertinggi pertama - " + habib);
    console.log("Daffa adalah siswa yang tertinggi kedua - " + daffa);
    console.log("Rafly adalah siswa yang terpendek - " + rafly);
  }
}

console.log("");
console.log("RUMUS KEDUA");
console.log("Urutan Siswa Dari Yang Tertinggi Ke Yang Pendek");

console.log("Yang tertinggi adalah....");
if (daffa > rafly) {
  if (daffa > habib) {
    console.log(daffa);
  } else {
    console.log(habib);
  }
} else {
  if (daffa < rafly) {
    console.log(habib);
  } else {
    console.log(habib);
  }
}

console.log("Yang menengah adalah....");
if (daffa > rafly) {
  if (daffa > habib) {
    console.log(habib);
  } else {
    console.log(daffa);
  }
} else {
  if (daffa < rafly) {
    console.log(rafly);
  } else {
    console.log(daffa);
  }
}

console.log("Yang terpendek adalah....");
if (daffa > rafly) {
  if (daffa > habib) {
    console.log(rafly);
  } else {
    console.log(rafly);
  }
} else {
  if (daffa < rafly) {
    console.log(daffa);
  } else {
    console.log(rafly);
  }
}

console.log("");
console.log("RUMUS KETIGA");
console.log("Urutan Siswa Dari Yang Tertinggi Ke Yang Pendek");

console.log("Yang tertinggi adalah....");
if (daffa > rafly && daffa > habib) {
  console.log(daffa);
} else if (habib > rafly && habib > daffa) {
  console.log(habib);
} else {
  console.log(daffa);
}

console.log("Yang menengah adalah....");
if (daffa > rafly && daffa > habib) {
  console.log(habib);
} else if (habib > rafly && habib > daffa) {
  console.log(habib);
} else {
  console.log(daffa);
}

console.log("Yang terpendek adalah....");
if (daffa > rafly && daffa > habib) {
  console.log(daffa);
} else if (habib > rafly && habib > daffa) {
  console.log(habib);
} else {
  console.log(daffa);
}
