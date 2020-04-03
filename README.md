# mongo-query-converter

It's a MongoDB helper tool that converters the given string date variable into JavaScript date format

## Install

```bash
yarn add mongo-query-converter
```

## Usage

```js
const { convertQuery } = require("mongo-query-converter");

let query = { createdAt : { $gte:"2020-03-18 14:08:31.601+03:00" } }

query = convertQuery(query, { dateKeys: ["createdAt"] } ; // query { createdAt: { $gte : 2020-04-03T17:37:56.782Z } }

```
