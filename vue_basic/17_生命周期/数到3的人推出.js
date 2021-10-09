function f(p, idx = 0) {
  if (p.length < 3) {
    return p;
  }
  const c = p.filter((m, i) => {
    return (i + 1 + idx) % 3 !== 0;
  });
  return f(c, p.length % 3);
}
function ca(n){
  let g =[];
  for (let i = 0; i < n; i++) {
    g.push(i+1)
  }
  return f(g)
}

// 测试，随机一个1-1000的数
const num = parseInt(Math.random() * 1000)
console.log(`随机数为:${num}`)
let r = ca(num);
console.log(`分别为第${r[0]}个和${r[1]}个留下来`)

