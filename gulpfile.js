import { src, dest, watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function css( done ) {
    src('src/scss/app.scss' , {sourcemaps: true})
        .pipe( sass().on('error', sass.logError))//esto hace que al finalizar la funcion anterior se ejecute este justo despues, para llevar un orden
        .pipe( dest('build/css', {sourcemaps: true}) )
        
    done();

}

export function dev() {
    watch('src/scss/**/*.scss', css)
}