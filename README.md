# CSS Tree Shake Plugin for Webpack

![CSS Tree Shake Logo](http://i.imgur.com/BRvvS1O.jpg)

## Optimize CSS Builds in Webpack
Writing CSS/Sass/Less can be a finicky process and frequent changes often leave unused or "dead" code in your CSS file. This plugin will determine from your bundled JavaScript which classes were used and only include those classes in your bundled, CSS output. This will remove all classes *not* present in your JavaScript built output.

* Built for Webpack 2
* No package dependencies
* Works on minified/unminified code
* Compatible with React.js builds
* Compatible with [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

---
## Usage

Install with npm.
```
npm install css-tree-shake-plugin --save-dev
```

**webpack.config.js**
```js
module.exports = {
	plugins: [
		new CSSTreeShakePlugin()
	]
}
```

### Options

Show classes being removed.
```js
const options = {
  // Will show the names of classes being removed from build
  showInfo: true,
  // These classes, if they exist, will be *included* in your build
  ignore: ['postcard__address'],
  // Do not remove any classes (defaults to true)
  remove: false
}

plugins: [
  new CSSTreeShakePlugin(options)
]
```

---
## Example

**index.js**
```jsx
const Postcard = (props) => (
   <div className="postcard">
      Hello from San Diego!
   </div>
)
```

**styles.css**
```css
.postcard {
  background-color: cornsilk;
  width: 400px;
  height: 200px;
  text-align: center;
}

.postcard__stamp {
  color: red;
}
```

### Build Output

**build/styles.css**

The `postcard__stamp` class was removed.
```css
.postcard {
  background-color: cornsilk;
  width: 400px;
  height: 200px;
  text-align: center;
}
```


