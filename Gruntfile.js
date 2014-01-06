/* global module:false */
module.exports = function(grunt) {
  // Do grunt-related things in here

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          define: true,
          requirejs: true,
          describe: true,
          expect: true,
          it: true
        }
      }
    },

	//Grunt-concat-plugin for files concatination task
	concat: {
	  options: {
	    // define a string to put between each file in the concatenated output
	    //separator: '/*********/'
	  },
	  dist: {
	    src: 'src/calculator/*.js',
	    dest: 'src/calculator/calculator.concat.js'
	  }
	},

    //Grunt-Uglify-Plugin for minification task
    uglify: {
      options: {
	    // the banner is inserted at the top of the output
	    banner: '/* Project: <%= pkg.name %> | This file is generated using grunt-uglifier plugin on <%= grunt.template.today("dd-mm-yyyy") %>. */'
      },
      dist: {
        src: ['<banner>', 'src/calculator/*.js'],
        dest: 'src/calculator/calculator.min.js'
      }
    }
  });

  // We have to load in the Grunt plugins we need
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  // You can configure Grunt to run one or more tasks by default by defining a default task.
  // When running more than one task as default, make the 2nd parameter as array.
  grunt.registerTask('default', ['jshint', 'uglify']);
};
