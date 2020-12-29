const challengeAnswer = function(){
    let letters = ['A','B','D','E']
    let time = Date.now();
    let letter = letters[Math.floor(Math.random()*letters.length)];
    let code = ['a01','c3z','11q','Vvn','v9x']
    let cde = code[Math.floor(Math.random()*code.length)];
    let result = `${time}_${letter}_${cde}`
    console.log(result);
    return result
}

const postAnswer = function(){
    let target = document.getElementById('challengeInfo');
    target.setAttribute('value',challengeAnswer())
}

