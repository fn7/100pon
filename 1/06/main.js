/**
 *
 * 06. 集合
 * "paraparaparadise"と"paragraph"に含まれる文字bi-gramの集合を，それぞれ, XとYとして求め，XとYの和集合，積集合，差集合を求めよ．さらに，'se'というbi-gramがXおよびYに含まれるかどうかを調べよ．
 */

var a = "paraparaparadise";
var b = "paragraph";

var X = makeCharBiGram(a);
var Y = makeCharBiGram(b);

var j = join(X, Y);
var k = intersection(X, Y);
var l = setDifference(X, Y);

console.log(JSON.stringify([
  j, k, l 
], null, "  "));

console.log("\"se\" included in X: ", -1 < X.indexOf("se"));
console.log("\"se\" included in Y: ", -1 < Y.indexOf("se"));


function makeCharBiGram(str) {
  var aa = str.split(/\s/);

  var bigram = [];
  aa.forEach(function(w) {
    var ww = w.split("");
    if (1 < ww.length) {
      var u = {};
      for(var i = 0; i < ww.length - 1; i++) {
        var k = [ww[i], ww[i + 1]].join("");
        if (u[k]) {
          continue;
        }
        u[k] = 1;
        bigram.push(k);
      }
    } else {
      bigram.push(ww); 
    }
  });
  return bigram;
};


function join(a, b) { //和集合
  var s = [];
  var u = {};
  a.forEach(function(x) {
    if (u[x]) {
      return;
    }
    u[x] = 1;
    s.push(x);
  });
  b.forEach(function(x) {
    if (u[x]) {
      return;
    }
    u[x] = 1;
    s.push(x);
  });
  return s;
}

function intersection(a, b) { // 積集合
  var u = {};
  a.forEach(function(x) {
    u[x] = 1;
  }); 
  var p = [];
  b.forEach(function(x) {
    if (u[x]) {
      p.push(x);
      delete u[x]; // 1回みつけたらpushさせない
    } 
  });
  return p;
}

function setDifference(a, b) { // 差集合
  var u = {};
  var s = [];
  a.forEach(function(x) {
    if (u[x]) {
      return;
    }
    u[x] = 1;
  });
  b.forEach(function(x) {
    if (u[x]) {
      u[x] = 0;
      return;
    }
  });
  var s = [];
  for(var n in u) {
    if (!u.hasOwnProperty(n)) {
      continue;
    }
    s.push(n);
  }
  return s;
}


