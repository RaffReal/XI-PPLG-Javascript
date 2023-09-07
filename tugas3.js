function ubahNilai (a) {
    console.log("Nilai Sebelum diubah " + a)
    a = a * 2
    return a
}

let nilai = 10;
nilai = ubahNilai(nilai)
console.log("Nilai setelah diubah " + nilai)

// atau

function modifyNilai (inputNilai) {
    inputNilai *= 2
    return inputNilai
}

const nilaiSebelum = 10
const nilaiSesudah = modifyNilai (nilaiSebelum)

console.log("Nilai Sebelum diubah " + nilaiSebelum)
console.log("Nilai Sesudah diubah " + nilaiSesudah)