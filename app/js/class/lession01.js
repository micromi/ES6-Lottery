// es6默认开启了严格模式
function test() {
  // for (let i = 1; i < 3; i++) {
  //   console.log(i);
  // } 
  // console.log(i);

  // let a = 1;
  // let a = 2; // let 不能重复声明变量
  // console.log(a);
}

test();


function last() {
  const PI = 3.1415926;
  // const PI; // 声明时必须赋值
  // PI = 8; // const声明的常量(数值)不能修改(引用类型除外)
  console.log(PI);
  const k = {
    a: 1
  }
  k.b = 3; // 对象可以修改(引用类型)
  console.log(k);
}

last();