import { src, dest, watch, series} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function js(done) {

    src('src/js/script.js')
        .pipe(dest('build/js') )

    done();
}

export function css(done) {
    src('src/scss/app.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))//esto hace que al finalizar la funcion anterior se ejecute este justo despues, para llevar un orden
        .pipe(dest('build/css', { sourcemaps: true }))

    done();

}

export function dev() {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
}

export default series(js, css, dev);//parallel para arrancar las tareas al mismo tiempo en lugar de una por una con series