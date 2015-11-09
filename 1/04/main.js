/**
 * 04. 元素記号
 * "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."という文を単語に分解し，1, 5, 6, 7, 8, 9, 15, 16, 19番目の単語は先頭の1文字，それ以外の単語は先頭に2文字を取り出し，取り出した文字列から単語の位置（先頭から何番目の単語か）への連想配列（辞書型もしくはマップ型）を作成せよ．
 */

var a = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.";

var aa = a.replace(/[,\.]/g, "").split(/\s/);

var oneChar = [1,5,6,7,8,9,15,16,19].map(function(n) { return n-1; });


var map = {};
for(var i = 0; i < aa.length; i++) {
  if (-1 < oneChar.indexOf(i)) {
    map[aa[i].substr(0, 1)] = i; 
  } else {
    map[aa[i].substr(0, 2)] = i;
  }
}

console.log(JSON.stringify(map, null, "  "));
