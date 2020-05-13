const http = require('http');
let html = `
<div class="gold-num">
<div class="gold-num-title">提现金额：</div>
<div class="num-box">
    <div class="num num-select" data-money="3">
        5元
    </div>
    <div class="num" data-money="5">
        8元
    </div>
    <div class="num" data-money="10">
        10元
    </div>
    <div class="num" data-money="50">
        12元
    </div>
</div>
</div>


`
// 返回 content-type = text/plain
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(html);
  });
  server.listen(8080,()=>{
      console.log('启动完毕')
  })