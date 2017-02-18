const fs = require('fs');
const path = require('path');

const classRegex = /\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?![^\{]*\})/gi;
const test = `className:"pagination__last"`;
const regexWrapper = (className) => {
	return new RegExp(`className:( )?('|")` + className + `('|")`, 'g');
}

function RemoveUnusedStyles() {}

RemoveUnusedStyles.prototype.apply = function(compiler) {
	compiler.plugin('emit', function(compilation, callback) {
		const styleFiles = Object.keys(compilation.assets).filter(asset => {
			return /\.css$/.test(asset);
		});

		const reactFiles = Object.keys(compilation.assets).filter(asset => {
			return /\.(js|jsx)$/.test(asset);
		})

		const classNamesInStyles = styleFiles.reduce((acc, filename) => {
			const source = compilation.assets[filename].source();
			const match = source.match(classRegex).map(str => str.slice(1));

			acc = acc.concat(match);

			return acc;
		}, []);

		const classNamesNotInReact = reactFiles.reduce((acc, filename) => {
			const source = compilation.assets[filename].source();

			const matches = classNamesInStyles
				.filter(className => {
					console.log(className)
					return !regexWrapper(className).test(source)
				});

			acc = acc.concat(matches);

			return acc;
		}, []);

		const updatedStyles = styleFiles.map(function(filename) {
			const source = compilation.assets[filename].source();

			let replaced = classNamesNotInReact.reduce((acc, className) => {
				return acc.replace(new RegExp('\.' + className + '(.|[\r\n])*\}'), '');
			}, source);

			return replaced;
		});

		styleFiles.forEach((filename, i) => {
			compilation.assets[filename] = {
				source: () => updatedStyles[i],
				size: () => updatedStyles[i].length
			}
		})

		callback();
	})
}

module.exports = RemoveUnusedStyles;