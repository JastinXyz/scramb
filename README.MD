# SCRAMB
<div align="center">

![scramb](https://img.shields.io/badge/Scramb-Randomize%20anything...-brightgreen?style=for-the-badge)<br>
![npm](https://img.shields.io/npm/v/scramb?label=Current%20Version&style=for-the-badge)<br>
![npm](https://img.shields.io/npm/dt/scramb?style=for-the-badge)

</div>

## Instalation
```cli
npm i scramb
```

## Example
```js
const scramb = require('scramb')

const makeid = scramb.makeId(8)
console.log(makeid) // e.g Result: { result: 'VYbF8638' }
```

## What's new in v3.0.4?
- Added make id but only numbers.
- Added magic conch shell.
- Added array shuffle.
- Added random falsy result.
- Fixed the comparison in the docs...

## Function
[**Find all functions in our website...**](https://jastinxyz.github.io/scramb) Maybe in the future there will be many other functions.

## Changelog
[v3.0.4](https://www.npmjs.com/package/scramb/v/3.0.4)

- [+] `<scramb>.makeidNumber("length")` - From contributor ([ThisMe124](https://github.com/ThisMe124))
- [+] `<scramb>.magicConchShell()`
- [+] `<scramb>.shuffle(["array"])`
- [+] `<scramb>.coin()`
- [+] `<scramb>.falsy()`
- [/] Fixed the comparison in the docs...

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

# Contributors

<a href = "https://github.com/JastinXyz/scramb/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=JastinXyz/scramb"/>
</a>
