/**
 * 05. n-gram
 * 与えられたシーケンス（文字列やリストなど）からn-gramを作る関数を作成せよ．この関数を用い，"I am an NLPer"という文から単語bi-gram，文字bi-gramを得よ．
 */

var a = "I am an NLPer";

function makeWordBiGram(str) {
  var aa = str.split(/\s/); 
  var bigram = [];
  for(var i = 0; i < aa.length - 1; i++) {
    bigram.push([aa[i], aa[i + 1]].join("-"));
  }
  return bigram;
}


function makeCharBiGram(str) {
  var aa = str.split(/\s/);
  var bigram = [];
  aa.forEach(function(w) {
    var ww = w.split("");
    if (1 < ww.length) {
      for(var i = 0; i < ww.length - 1; i++) {
        bigram.push([ww[i], ww[i + 1]].join("-"));
      }
    } else {
      bigram.push(w);
    }
  });
  return bigram;
}


console.log(JSON.stringify(makeWordBiGram(a)));
console.log(JSON.stringify(makeCharBiGram(a)));
