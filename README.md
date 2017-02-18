# Remove classNames
## Webpack Plugin
### Optimize CSS builds in React projects

```
new RemoveClassNamesPlugin()
```


Remove classes from .css that don't exist as a "className" in a React.js bundle.

**webpack.config.js**
```
module.exports = {
	plugins: [
		new RemoveClassNamesPlugin()
	]
}
```

---

**Example**

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

### Before
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
```
.postcard {
  background-color: cornsilk;
  width: 400px;
  height: 200px;
  text-align: center; }

/* classes not used in the React bundle */
/* are not included in the css output */
```


