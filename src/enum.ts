// 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter)
// 枚举反向映射
console.log(Role)
// 字符串枚举
enum Message {
  Success = "恭喜你,成功了",
  Fail = "抱歉,失败了"
}

// 异构枚举,不建议使用
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成功性质只读,不能修改

// 枚举类型分类
enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length,
}

// 常量枚举,编译期间被省略
const enum Month {
  Jan,
  Feb,
  Mar,
}
let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month)

// 枚举类型
enum E { a, b } // 非固定
enum F { a = 0, b = 1 }  // 数字
enum G { a = 'apple', b = 'banana' } // 字符串

let e: E = 3
let f: F = 3
// e === f

// 枚举成员类型,不可以被比较
let e1: E.a = 1
let e2: E.b
//e1 === e2
let e3: E.a = 1
// 指定明确数据之后可以比较
e1 === e3

let f1: F.a
let f2: F.b

let g1: G = G.b
let g2: G.a = G.a
