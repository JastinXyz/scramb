# SCRAMB
<div align="center">

![scramb](https://img.shields.io/badge/Scramb-Randomize%20anything...-brightgreen?style=for-the-badge)<br>
![npm](https://img.shields.io/npm/v/scramb?label=Current%20Version&style=for-the-badge)<br>
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
## What's new in v3.0.0?
- True or False changed to boolean
- Docs at https://jastinxyz.github.io/scramb/
- Added Random User Agent
- Added email checker
- Added url checker
- Added rps

#
- Boolean
```js
scramb.boolean()
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
- Random user agent
```js
scramb.userAgents()
```
- Is Email
```js
scramb.isEmail("STRING")
```
- Is URL
```js
scramb.isURL("STRING")
```
- Rock Paper Scissors
```js
scramb.rps()
```

# Changelog
[v3.0.0](https://www.npmjs.com/package/scramb/v/3.0.0)
- [/] `Changed <scramb>.trueOrFalse() to <scramb>.boolean()`
- [+] `Docs At https://jastinxyz.github.io/scramb/`
- [+] `<scramb>.userAgents()`
- [+] `<scramb>.isEmail("STRING")`
- [+] `<scramb>.isURL("STRING")`
- [+] `<scramb>.rps()`

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