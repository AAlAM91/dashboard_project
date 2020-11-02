const { on } = require("gulp");
var GulpClient = require("gulp"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    concat = require("gulp-concat"),
    prefixer = require("gulp-autoprefixer"),
    minify = require("gulp-minify"),
    livereload = require("gulp-livereload")
    map = require("gulp-sourcemaps");

GulpClient.task("html" , function(){
    return GulpClient.src("stage/html/*.pug")
    .pipe(pug({pretty: true}))
    .pipe(GulpClient.dest("dist"))
    .pipe(livereload())
});
GulpClient.task("sass" , function(){
    return GulpClient.src(["stage/css/**/*.scss" , "stage/css/**/*.css"])
    .pipe(map.init())
    .pipe(sass({outputStyle: "compact"})).on("error" , sass.logError)
    .pipe(prefixer())
    .pipe(concat("style.css"))
    .pipe(map.write("."))
    .pipe(GulpClient.dest("dist/css"))
    .pipe(livereload())
});
GulpClient.task("js" , function(){
    return GulpClient.src("stage/scripts/*.js")
    .pipe(concat("scripts.js"))
    .pipe(minify())
    .pipe(GulpClient.dest("dist/js"))
    .pipe(livereload())
});

GulpClient.task("watch" , function(){
    require("./server");
    livereload.listen();
    GulpClient.watch("stage/html/dashboard.pug" , GulpClient.series("html"));
    GulpClient.watch(["stage/css/**/*.scss" , "stage/css/**/*.css"] , GulpClient.series("sass"));
    GulpClient.watch("stage/scripts/*.js" , GulpClient.series("js"))
});