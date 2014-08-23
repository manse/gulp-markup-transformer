# gulp-markup-transformer

Transform source with markup-transformer.
https://www.npmjs.org/package/gulp-markup-transformer

## Installation

```
npm install gulp-markup-transformer
```

## Usage

```JavaScript
var gulp = require('gulp')
var gulpmt = require('gulp-markup-transformer');

gulp.task('default', function() {
	gulp.src('develop/*.html')
	.pipe(gulpmt({
		/* options
			syntax: 'html',
			shape: function(n) {
				return n % 2 ? '11111111' : '00000000';
			}
			// See: https://github.com/manse/markup-transformer
		*/
	}))
	.pipe(gulp.dest('./release/'))
});


```
