# gulp-markup-transformer

Transform source with markup-transformer.

## Installation

```
npm install gulp-markup-transformer
```

## Usage
See: https://github.com/manse/markup-transformer

```JavaScript
var gulp = require('gulp')
var markupTransformer = require('gulp-markup-transformer');

gulp.task('default', function() {
	gulp.src('develop/*.html')
	.pipe(markupTransformer({
		/*
			syntax: 'html',
			shape: function(n) {
				return n % 2 ? '11111111' : '00000000';
			}
		*/
	}))
	.pipe(gulp.dest('./release/'))
});


```
