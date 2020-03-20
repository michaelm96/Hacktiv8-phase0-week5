function changeVocals(str) {
    var newVocal = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a") {
            newVocal += "b"
        } else if (str[i] == "e") {
            newVocal += "f"
        } else if (str[i] == "i") {
            newVocal += "j"
        } else if (str[i] == "u") {
            newVocal += "v"
        } else if (str[i] == "o") {
            newVocal += "p"
        } else if (str[i] == "A") {
            newVocal += "B"
        } else if (str[i] == "E") {
            newVocal += "F"
        } else if (str[i] == "I") {
            newVocal += "J"
        } else if (str[i] == "U") {
            newVocal += "V"
        } else if (str[i] == "O") {
            newVocal += "P"
        } else {
            newVocal += str[i]
        }
    }
    return reverseWord(newVocal);
}

function reverseWord(str) {
    var revStr = ""
    for (var k = str.length - 1; k >= 0; k--) {
        revStr += str[k]
    }
    return setLowerUpperCase(revStr)
}

function setLowerUpperCase(str) {
    var besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var kecil = "abcdefghijklmnopqrstuvwxyz"
    var hasil = ""
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < kecil.length; j++) {
            if (str[i] == kecil[j]) {
                hasil += besar[j];
                break;
            } else if (str[i] == besar[j]) {
                hasil += kecil[j];
                break;
            } else if (j == kecil.length - 1) {
                hasil += str[i];
            }
        }
    }
    return removeSpaces(hasil);
}

function removeSpaces(str) {
    var remSpace = ""
    for (var n = 0; n < str.length; n++) {
        if (str[n] != " ") {
            remSpace += str[n]
        }
    }
    return remSpace
}

function passwordGenerator(name) {
    if(name.length < 5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    return changeVocals(name)
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'