/*
** 解构赋值
*/

// 数组类型解构赋值
{
  let a,b,rest;
  [a, b] = [1, 2];
  console.log(a, b); // a = 1; b=2;
}

{
  let a, b, rest;
  [a, b,...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest); // a = 1; b=2; rest = [3, 4, 5, 6];
}

// 对象类型解构赋值
{
  let a, b;
  ({a, b} = {a:1, b:2});
  console.log(a, b); // a = 1; b=2;
}

// 默认值设置
{
  let a,b,c,rest;
  [a, b, c=3] = [1, 2]; // 设置c默认值，如果不设置默认值为undefined
  console.log(a, b, c); // a = 1; b=2; c: 3;
}

// 应用场景：变量交换
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log(a, b); // a = 2; b=1;
}

// 应用场景：接收函数返回值
{
  function f() {
    return [1, 2];
  }
  let a, b;
  [a, b] = f();
  console.log(a, b); // a = 1; b = 2;
}

// 应用场景：对应位置匹配函数返回值(数组)
{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a,,,b] = f();
  console.log(a, b); // a = 1; b = 4;
}

// 应用场景：对应位置匹配函数返回值(数组长度不定)
{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a,,...b] = f();
  console.log(a, b); // a = 1; b = [3, 4, 5];
}


{
  let o = {p: 42, q: true};
  let {p, q} = o; // 两侧都是对象，按key-value对应匹配
  console.log(p, q); // p = 42; q = true;
}

{
  let {a = 10, b = 5} = {a: 3}; // a 被覆盖，b有默认值
  console.log(a, b); // a = 3; b = 5;
}

// 对象嵌套和数组的应用
{
  let metaData = {
    title: 'abc',
    test: [
      {
        title: 'test',
        desc: 'description'
      }
    ]
  }
  let {title: esTitle, test: [{title: cnTitle}]} = metaData; // 位置格式要对应
  console.log(esTitle, cnTitle); // esTitle = 'abc'; cnTitle = 'test';
}