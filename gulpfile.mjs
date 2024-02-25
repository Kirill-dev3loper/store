import gulp from 'gulp'
import autoPrefixer from 'gulp-autoprefixer'

const cloneFiles = async() =>{
    return gulp.src("app/**/*.html")
    .pipe(gulp.dest("public"))
}

const cloneIMG = async()=>{
    return gulp.src('app/img/*.*')
    .pipe(gulp.dest('public/img'))
}

const autoprefixer = async() =>{
    return gulp.src("app/css/*.css")
    .pipe(autoPrefixer())
    .pipe(gulp.dest("public/css"))
}

const css = async() =>{
    gulp.watch("app/css/*.css", gulp.series(autoprefixer))
}

const img = async()=>{
    gulp.watch('app/img/*.*', gulp.series(cloneIMG))
}

const html = async() =>{
    gulp.watch("app/**/*.html", gulp.series(cloneFiles))
}

const build = gulp.parallel(html,css)

export{
    cloneFiles,
    autoprefixer,
    cloneIMG,
    css,
    html,
    img,
    build as default
}