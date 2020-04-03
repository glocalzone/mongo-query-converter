# MongoDB Query Converter

![Stars](https://img.shields.io/github/stars/glocalzone/mongo-query-converter)
![Issues](https://img.shields.io/github/issues/glocalzone/mongo-query-converter)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/glocalzone/mongo-query-converter/issues)
![GitHub release](https://img.shields.io/github/tag/glocalzone/mongo-query-converter.svg)
![GitHub license](https://img.shields.io/github/license/glocalzone/mongo-query-converter.svg)

It's a MongoDB helper tool that converters the given string date variable into JavaScript date format

## Install

```bash
yarn add mongo-query-converter
```

## Usage

```js
const { convertQuery } = require("mongo-query-converter");

let query = { createdAt : { $gte:"2020-03-18 14:08:31.601+03:00" } }

query = convertQuery(query, { dateKeys: ["createdAt"] } ; 
// query { createdAt: { $gte : 2020-04-03T17:37:56.782Z } }

```
