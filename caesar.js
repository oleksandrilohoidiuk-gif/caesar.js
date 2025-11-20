const stringToEncrypt = `Hell, World!`
let key = 53
function caesarCode (text, key) {
 const abc = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,
                `o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`,`A`,`B`,
                `C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,
                `Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`]
let result = ' '
//console.log(abc.length)
for (let i = 0; i < text.length; i++) {
    const newIndex = (abc.indexOf(text[i]) + key) % abc.length
    result += abc[newIndex]
}
return result
}

const cipher = caesarCode(stringToEncrypt, key)
console.log(cipher)