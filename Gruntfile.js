/**
 * Running the default task will trigger the watch task which looks for SCSS and JS changes
 * under the "homepage-redesign" folder.
 * When a change is detected, the SCSS and/or JS files will be rebuilt and placed into the "dist" folder
 * for inclusion.
 *
 */
module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Watches for files changing.
        watch:{
            styles: {
                files: './sass/**/*.scss',
                tasks: ['sass', 'cssmin'],
                options: { event: ['all'], livereload:true }
            },
            js: {
                files: './app/**/*.js',
                tasks: ['concat', 'uglify'],
                options: { event: ['all'], livereload:true }
            },
            html: {
                files: './app/**/*.html',
                tasks: ['ngtemplates'],
                options: { event: ['all'] }
            }
        },

        // Compiles the SASS
        sass: {
            dist: {
                files: {
                    './dist/css/brownbag.css': './sass/main.scss'
                }
            }
        },

        // Minimizes CSS
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './dist/css',
                    src: ['brownbag.css'],
                    dest: './dist/css',
                    ext: '.min.css'
                }]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['./app/**/*.js'],
                dest: './dist/js/brownbag.js'
            }
        },

        // Minimizes JavaScript
        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                    sourceMapName: './dist/js/brownbag.js.map'
                },
                files: {
                    './dist/js/brownbag.min.js': './dist/js/brownbag.js'
                }
            }
        },

        // Adds html templates to the angular template cache.
        ngtemplates: {
            'bb-brownbag': {
                src: ['app/**/*.html'],
                dest: 'app/templates.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['sass', 'cssmin', 'ngtemplates', 'concat', 'uglify', 'watch']);
};

