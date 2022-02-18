
// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')

// 導入模組
var fs = require('fs')
var path = require('path')
// 可改寫檔名及編碼
var x = 'ajm.txt'
var ru = 'utf8'
var wu = 'utf8'
// 完成後的副檔名
var afterName = ''

// 用絕對路徑讀入檔案，使用node的readFileSync同步函數
var a = fs.readFileSync(x, ru)
// 導入陣列
var b = a.split('\n')

// ======
// 進行你要的操作
var pic = []
for (var i = 0; i < b.length; i++) {
    if (/<img/.test(b[i])) {
        pic[i] = b[i].replace(/.*<img n=("[^]+")\/?>.*/g, '$1')
    }
}

// 用絕對路徑寫入檔案
fs.writeFileSync('img.txt', pic.join('\n').replace(/\s+/g, ',\n'), wu)

// 用絕對路徑寫入檔案
// fs.writeFileSync(x + afterName, b.join('\n'), wu)

// 完成時返回通知
console.log('only is OK: ' + x + afterName)

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')