function kaliTerusRekursif(angka) {
    var numStr = angka.toString()
    var total = 1
    if(numStr.length == 1){
        return angka
    }
    for(i of numStr){
        total *= i
    }
    return kaliTerusRekursif(total)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6