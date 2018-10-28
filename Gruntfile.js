module.exports = function (grunt) {
  grunt.initConfig({
      autoprefixer: {
          dev: {
              files: {
                  'assets/stylesheets/text_styles.css': 'assets/stylesheets/test_styles.css'
              }
          }
      },
      compile: {
          styles: {
              files: ['assets/stylesheets/text_styles.css'],
              tasks: ['autoprefixer']
          }
      }
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
};