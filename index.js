// add solution here
function theBeatlesPlay(artists, instruments){
  var result= []
  for (var i = 0; i < artists.length; i++) {
    result[i] = `${artists[i]} plays ${instruments[i]}`
  }
  return result
}

function johnLennonFacts(facts){
  var result = []
  for (var i = 0; i < facts.length; i++) {
    result[i] = `${facts[i]}!!!`
  }
}
