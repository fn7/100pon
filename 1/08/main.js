/**
 * 08. 暗号文
 * 与えられた文字列の各文字を，以下の仕様で変換する関数cipherを実装せよ．
 *
 * 英小文字ならば(219 - 文字コード)の文字に置換
 * その他の文字はそのまま出力
 * この関数を用い，英語のメッセージを暗号化・復号化せよ．
 */

console.log(cipher("I am a little man."));
console.log(cipher(cipher("I am a little man.")));



function cipher(str) {
  return str.replace(/([a-z])/g, function(m, m1) {
    return String.fromCharCode(219 - m1.charCodeAt());
  });
}




