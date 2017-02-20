# CSS Tree Shake Plugin for Webpack
### Optimize CSS builds

Writing CSS/Sass/Less can be a finicky process and frequent changes often leave unused or "dead" code in your CSS file. This plugin will determine from your bundled JavaScript which classes were used and only include those classes in your bundled, CSS output.

---
## Usage

Install with npm.
```
npm install css-tree-shake-plugin --save-dev
```

Include in your webpack configuration.

**webpack.config.js**
```js
module.exports = {
	plugins: [
		new RemoveClassNamesPlugin()
	]
}
```

### Options

Show classes being removed.
```js
plugins: [
  new RemoveClassNamesPlugin({
    showInfo: true
  })
]
```

---
## Example

### Before

**index.js**
```jsx
const Postcard = (props) => {
	return (
		<div className="postcard">
			Hello from San Diego!
		</div>
	)
};

...
```

**build/styles.css**
```
.postcard {
  background-color: cornsilk;
  width: 400px;
  height: 200px;
  text-align: center; }

// 😕
.postcard__unused {
  color: red; }
```

### After

**build/styles.css**

Classes that have been placed into stylesheets, but not used in a React codebase will not be present in your final css output.
```
.postcard {
  background-color: cornsilk;
  width: 400px;
  height: 200px;
  text-align: center; }

// 🏄🏽
```


