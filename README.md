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

| Prop            | Type      | Default                                                 | Required | Description                                                                | Example                                         |
| --------------- | --------- | ------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | ----------------------------------------------- |
| password        | string    | ''                                                      | True     | This is password that bar color and word is set based on it                | `jdhgfsd`                                       |
| scoreWords      | string[5] | ["Weak", "Medium", "Normal", "Strong", "Very Strong"]   | False    | determine the word that is written on the bar                              | any string array with length=5                  |
| barColors       | string[5] | ["#ed5565", "#dd772c", "#f8ac59", "#2b90ef", "#25c281"] | False    | determine the color of the bar                                             | any string array with length=5                  |
| width           | string    | '100%'                                                  | False    | width of the bar                                                           | you can set it by % or px like "60%" or "500px" |
| height          | string    | '20px'                                                  | False    | height of the bar                                                          | "30px"                                          |
| shapeEdge       | string    | "circle"                                                | False    | the shape of the edge of the bar                                           | it can be "circle" or "square"                  |
| backgroundColor | string    | "#ddd"                                                  | False    | the default color of the bar                                               | any color like "#000"                           |
| scoreWordClass  | string    | ''                                                      | False    | the class to set font and any style of the word that is written on the bar | any string name of a css class                  |

## Browser support

Tested with modern browsers.

## License

the ISC license.
