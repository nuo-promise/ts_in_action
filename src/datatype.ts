// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3];
// 通过使用 | 使用联合类型
let arr2: Array<number | string> = [1, 2, 3, '3']

//元组
let tuple: [number, string] = [0, '1']
//tuple.push(2)
//console.log(tuple)
// 元组可以push 增加元素,但是无法再初始化之外的index 访问元组元素
//tuple[2]

// 函数
let add = (x: number, y: number): number => x + y
console.log(add(2, 1))
// 定义函数类型
let compute: (x: number, y: number) => number
compute = (a, b) => a + b
console.log(compute(2, 2))


// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 };
console.log(obj.x)

// symbol 具有唯一的值
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

//undefined , null
let un: undefined = undefined
let nu: null = null
num = undefined
num = null

// void - 操作符
let noReturn = () => { }
// void 0 返回 undefined 

// any
let x
x = 123
x = []
x = () => { }

// never
let error = () => {
  throw new Error('error')
}

let endeless = () => {
  while (true) { }
}
