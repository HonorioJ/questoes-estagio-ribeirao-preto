var letter = "a"
var quantity = 0

function verify(){
  var phrase = document.getElementById('string').value.toLowerCase()
  for (var i = 0; i < phrase.length; i++) {
    if (phrase[i] == letter) {
      quantity++
    }
  }
  if(quantity == 0){
    document.getElementById('quantity').innerHTML = 'A letra "a" não existe na frase'
  } else {
    document.getElementById('quantity').innerHTML = `Existem ${quantity} letras "a" nessa frase`
  }
  quantity = 0
}

