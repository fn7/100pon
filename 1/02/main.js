/**
 * 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
 * 「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．
 *
 */

var a = "パトカー";
var b = "タクシー";

var aa = a.split("");
var bb = b.split("");
var n = Math.max(a.length, b.length);

var r = "";
for(var i = 0; i < n; i++) {
  r += (aa[i] || "") + (bb[i] || "");
}

console.log(r);
