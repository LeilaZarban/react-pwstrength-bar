# react-pwstrength-bar

A React component that displays the password strength bar

## Note

- This package is based on [zxcvbn](https://github.com/dropbox/zxcvbn).
  `zxcvbn` is a powerful library, but its size is very large.
  I recommend you use this package by [Code-Splitting](https://reactjs.org/docs/code-splitting.html).

## Install

```
$ npm install react-pwstrength-bar
```

```
$ yarn add react-pwstrength-bar
```

## Usage

```js
import PasswordStrengthBar from 'react-password-strength-bar';

const password ;
<PasswordStrengthBar password={password} />
```

## Props

#### `password`: string

- isRequired: true
- default: ''

#### `scoreWords`: string[]

- isRequired: false
- default: ["Weak", "Medium", "Normal", "Strong", "Very Strong"];

#### `barColors`: string[]

- isRequired: false
- default: ["#ed5565", "#dd772c", "#f8ac59", "#2b90ef", "#25c281"]

#### `width`: string

- isRequired: false
- default: "100%"
-

#### `height`: string

- isRequired: false
- default: "20px"
-

#### `shapeEdge`: string

- isRequired: false
- default: "circle"
- examples: "circle", "square"

#### `backgroundColor`: string

- isRequired: false
- default: "#ddd"

#### `scoreWordClass`: string

- isRequired: false
- default: ''

## Browser support

Tested with modern browsers.

## License

the ISC license.
