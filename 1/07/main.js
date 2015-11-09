/**
 * 07. テンプレートによる文生成
 * 引数x, y, zを受け取り「x時のyはz」という文字列を返す関数を実装せよ．さらに，x=12, y="気温", z=22.4として，実行結果を確認せよo
 */

console.log(tmplate("{{x}}時の{{y}}は{{z}}")({x: 12, y: "気温", z: 22.4}));


function tmplate(str) {
  return function(param) {
    return str.replace(/{{([^}]+)}}/g, function(m, m1) {
      return param[m1] || ""; 
    });
  };
}
