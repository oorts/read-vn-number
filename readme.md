# Read Vietnamese number to words [![npm](https://img.shields.io/npm/v/@oorts/read-vn-number.svg)](https://www.npmjs.com/package/@oorts/read-vn-number)

A small library that adds commas to numbers

![Node.js CI](https://github.com/oorts/read-vn-number/workflows/Node.js%20CI/badge.svg)
![](https://travis-ci.org/oorts/read-vn-number.svg?branch=master) [![codecov](https://codecov.io/gh/oorts/read-vn-number/branch/master/graph/badge.svg)](https://codecov.io/gh/oorts/read-vn-number)
[![GitHub All Releases](https://img.shields.io/github/downloads/oorts/read-vn-number/total.svg)](https://github.com/oorts/read-vn-number)
[![npm](https://img.shields.io/npm/dt/@oorts/read-vn-number.svg)](https://www.npmjs.com/package/@oorts/read-vn-number)

## Installation

`npm install @oorts/read-vn-number`
or
`yarn add @oorts/read-vn-number`

## Usage

    import readVNNumber from '@oorts/read-vn-number';

    var output = readVNNumber.toVNWord(15);

Output should be `mười lăm`

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
