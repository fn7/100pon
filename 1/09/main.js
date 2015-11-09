/**
 *
 * 09. Typoglycemia
 * スペースで区切られた単語列に対して，各単語の先頭と末尾の文字は残し，それ以外の文字の順序をランダムに並び替えるプログラムを作成せよ．ただし，長さが４以下の単語は並び替えないこととする．適当な英語の文（例えば"I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."）を与え，その実行結果を確認せよ．
 */


var a = "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind .";

console.log(a);
console.log(a.split(/\s/).map(typoglycemia).join(" "));



function shuffle(arr) {
  var len = arr.length;
  for(var i = len - 1; i > 0; i--) {
    var n = 0 | Math.random() * len;
    var tmp = arr[i];
    arr[i] = arr[n];
    arr[n] = tmp;
  }
  return arr;
}

function typoglycemia(word) {
  if (word.length <= 4) {
    return word;
  } 
  var ww = word.split("");
  var first = ww.shift();
  var last = ww.pop();
  ww = shuffle(ww);
  return [].concat(first, ww, last).join("");
}


