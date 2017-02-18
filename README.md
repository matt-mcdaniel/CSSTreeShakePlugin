# Remove classNames
## Webpack Plugin
### Optimize CSS builds in React projects

```
new RemoveClassNamesPlugin()
```


Remove classes from .css that don't exist as a "className" in a React.js bundle.

---
## Usage
**webpack.config.js**
```
module.exports = {
	plugins: [
		new RemoveClassNamesPlugin()
	]
}
```

---
## Example

**index.js**
```
const Root = (props) => {
	return (
		<div className="postcard">
			Hello from San Diego!
		</div>
	)
};

...
```

**styles.css**
```
.postcard {
	background-color: cornsilk;
	width: 400px;
	height: 200px;
	text-align: center;
}

.postcard__unused {
	color: red;
}
```


**build/styles.css** *(Before)*
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



**build/styles.css** *(After)*

Classes that have been placed into stylesheets, but not used in a React codebase will not be present in your final css output.
```
.postcard {
  background-color: cornsilk;
  width: 400px;
  height: 200px;
  text-align: center; }

// 🏄🏽
```


