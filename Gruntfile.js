module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

	jade: {
	  compile: {
	    options: {
	      data: {
	        debug: false
	      },
	      pretty: true
	    },
	    files: {
	      "index.html": ["src/jade/*.jade"]
	    }
	  }
	},

	watch: {
	  jade: {
	    files: 'src/jade/*.jade',
	    tasks: ['jade']
	  }
	}

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['watch', 'jade']);
};