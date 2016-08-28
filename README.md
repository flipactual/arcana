# arcana

[![flipactual](https://img.shields.io/badge/😋-flipactual-218AC7.svg?style=flat-square)](https://www.flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/arcana.svg?style=flat-square)](https://travis-ci.org/flipactual/arcana/)
[![Node](https://img.shields.io/node/v/arcana.svg?style=flat-square)](http://npmjs.com/package/arcana)
[![NPM](https://img.shields.io/npm/v/arcana.svg?style=flat-square)](http://npmjs.com/package/arcana)

a tarot deck generator

## Scripts

### `test` – run the tests

```sh
npm run test
```

### `coverage` – generate and view code coverage as HTML

```sh
npm run coverage
```

### `lint` – lint the codebase

```sh
npm run lint
```

### `readme` – generate the README

```sh
npm run readme
```

<a name="module_deck"></a>

## deck

* [deck](#module_deck)
    * [module.exports](#exp_module_deck--module.exports) ⏏
        * [new module.exports([deck])](#new_module_deck--module.exports_new)

<a name="exp_module_deck--module.exports"></a>

### module.exports ⏏
Class representing a deck

**Kind**: Exported class  
<a name="new_module_deck--module.exports_new"></a>

#### new module.exports([deck])
Create a deck


| Param | Type | Description |
| --- | --- | --- |
| [deck] | <code>Object</code> | the deck description |
| deck.majorArcana | <code>Object</code> | the major arcana description |
| deck.majorArcana.symbols | <code>Array.&lt;string&gt;</code> | the major arcana symbols |
| deck.minorArcana | <code>Object</code> | the minor arcana description |
| deck.majorArcana.suits | <code>Array.&lt;string&gt;</code> | the minor arcana suits |
| deck.majorArcana.orders | <code>Array.&lt;string&gt;</code> | the minor arcana orders |


## License

MIT @ [Flip](https://github.com/flipactual)
