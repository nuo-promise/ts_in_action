# ts_in_action
TypeScript In Action.
### 基本数据类型
#### ES6的数据类型
> Boolean,Number,String,Array,Function,Object,Symbol,undefined,null
#### TypeScript 的数据类型
> extends ES6; void,any,never,元祖,枚举,高级类型
#### 类型注解
> 相当于强类型语言中的类型说明 => 适用 : type
### 枚举类型
> 枚举实现原理
```javascript
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
};

"use strict";
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));

enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length,
}

"use strict";
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
})(Char || (Char = {}));
```
> 数字类型枚举类型可以是类型,也可以枚举成员,字符串枚举类型只能取成员变量
