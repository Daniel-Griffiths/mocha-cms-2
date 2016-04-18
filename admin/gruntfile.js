module.exports = function(grunt) {

  grunt.initConfig({

    /*
    |-------------------------------------------------------
    | Watch
    |-------------------------------------------------------
    | watch for any SCSS file changes 
    |
    */

    watch: {
	  options: {
		livereload: true,
      },
      css: { 
        files: ['assets/css/*.styl'],
        tasks: ['stylus'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      html: { 
        files: ['**/*.jade'],
        tasks: ['jade'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
	    js: { 
        files: ['assets/js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },

    /*
    |-------------------------------------------------------
    | Stylus
    |-------------------------------------------------------
    | compile Stylus to CSS 
    |
    */

    stylus: {
	  compile: {
		files: {
		  'assets/css/main.css': ['assets/css/*.styl'] // compile and concat into single file
		}
	  }
	},
	
    /*
    |-------------------------------------------------------
    | Jade
    |-------------------------------------------------------
    | compile Jade to HTML 
    |
    */
	
	jade: {
	  compile: {
		files: [{
		  expand: true,
		  cwd: 'app/views/jade',
		  src: '*.jade',
		  dest: 'app/views',
		  ext: '.php'
		}]
	  }
	},
	
    /*
    |-------------------------------------------------------
    | Javascript
    |-------------------------------------------------------
    | Minify Javascript
    |
    */
	
	uglify: {
	   my_target: {
		files: {
			'assets/js/main.min.js': ['assets/js/main.js']
		}
	  }
	}
    
  });

  /*
  |-------------------------------------------------------
  | Load Tasks
  |-------------------------------------------------------
  */

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  /*
  |-------------------------------------------------------
  | Register Tasks
  |-------------------------------------------------------
  */
  
  grunt.registerTask('default', ['watch']);

};