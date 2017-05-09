var gulp = require('gulp'),
    gulploadPlugins = require('gulp-load-plugins'),
    $ = gulploadPlugins();

var open = require('open');

var app = {
    src:'src/',
    build:'build/',
    dist:'dist/'
}

gulp.task('lib',function (){
    gulp.src('bower_components/**/*.js')
        .pipe(gulp.dest(app.build+'vendor'))
        .pipe(gulp.dest(app.dist+'vendor'))
        .pipe($.connect.reload())
})

gulp.task('html',function () {
    gulp.src(app.src+'**/*.html')
        .pipe(gulp.dest(app.build))
        .pipe(gulp.dest(app.dist))
        .pipe($.connect.reload())
})

gulp.task('css',function (){
    gulp.src(app.src+'style/index.less')
        .pipe($.less())
        .pipe(gulp.dest(app.build+'style/'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.dist+'style/'))
        .pipe($.connect.reload())
})

gulp.task('js',function (){
    gulp.src(app.src+'js/*.js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.build+'js/'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.build+'js/'))
        .pipe($.connect.reload())
})

gulp.task('image',function (){
    gulp.src(app.src+'images/**/*')
        .pipe(gulp.dest(app.build+'images/'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.dist+'images/'))
        .pipe($.connect.reload())
})

gulp.task('build',['lib','css','html','js','image'])

gulp.task('server',['build'],function (){
    $.connect.server({
        //运行目录
        root:[app.build],
        //是否热更新
        livereload:true,
        //端口号
        port:10000
    })

    // 需要监听的任务
    gulp.watch('bower_components/**/*',['lib']);
    gulp.watch(app.src+'**/*.html',['html']);
    gulp.watch(app.src+'js/**/*.js',['js']);
    gulp.watch(app.src+'images/**/*',['image']);
    gulp.watch(app.src+'style/**/*.less',['css']);

    //通过浏览器把指定的地址打开
    open('http://localhost:10000');
})

gulp.task('default',['server'])