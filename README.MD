# SCRAMB
<div align="center">

![scramb](https://img.shields.io/badge/Scramb-Randomize%20anything...-brightgreen?style=for-the-badge)<br>
![npm](https://img.shields.io/npm/v/scramb?label=Latest%20Version&style=for-the-badge)<br>
![npm](https://img.shields.io/npm/dt/scramb?style=for-the-badge)

</div>

# Instalation
```cli
npm i scramb
```

# Example
```js
const scramb = require('scramb')

const makeid = scramb.makeId(8)
console.log(makeid) // e.g Result: { result: 'VYbF8638' }
```

# All Function
Maybe in the future there will be many other functions.
#
## What's new in v2.0.5?
- String Checker
```js
scramb.isString(SOME VALUE)
```
- Number Checker
```js
scramb.isNumber(SOME VALUE)
```
- Min Max
```js
scramb.minMax("min number", "max number")
```
#
- True Or False
```js
scramb.trueOrFalse()
```
- Yes No
```js
scramb.yesNo()
```
- Option
```js
scramb.option('option1', 'option2')
```
- Random Array
```js
const array = // ... something array
scramb.randomArr(array)
```

- Make Id
```js
const number = // number for id length
scramb.makeId(number)
```
- Password Generator
```js
const number = // number for password length
scramb.passGen(number)
```
- Random String
```js
scramb.randomString('STRING', 'NUMBER OF LENGTH')
```

# Changelog
[v2.0.5](https://www.npmjs.com/package/scramb/v/2.0.5)
- [+] `<scramb>.isNumber()`
- [+] `<scramb>.isString()`
- [+] `<scramb>.minMax()`

[v2.0.0](https://www.npmjs.com/package/scramb/v/2.0.0)
- First stable release

# Links
- <strong>[GITHUB](https://github.com/JastinXyz)</strong>
- <strong>[MY WEBSITE](https://jastinch.xyz)</strong>
- <strong>[Ko-Fi](https://ko-fi/jastinch)</strong>
- <strong>[Saweria](https://saweria.co/jastinch)</strong>
- <strong>[Trakteer](https://trakteer.id/jastinch)</strong>