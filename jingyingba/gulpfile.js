var jade = require("gulp-jade");
var sass = require("gulp-sass");
var gulp = require("gulp");
var jss = require("gulp-uglify");
var watch = require("gulp-watch");

gulp.task("default",["watch"],function(){

})

gulp.task("watch",function(){
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("jade/*.jade",["jade"])
})

gulp.task("jade",function(){
	gulp.src("jade/*.jade")
	// .pipe(data(function(file){
	// 	return require(__dirname+"/JSON/index.sjon");
	// }))
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest("html/"))
})
// .pipe(data(function(file){
// 	return require(__dirname+"/JSON/index.json");
// }))
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("css/"))
})

gulp.task("jss",function(){
	gulp.src("jss/*.js")
	.pipe(jss())
	.pipe(gulp.dest("js/"))
})