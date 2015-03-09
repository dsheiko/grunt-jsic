# grunt-jsic

A grunt task for running js import compiler (https://github.com/dsheiko/jsic)

> Note: This used to be called 'grunt-contrib-jsic' in the npm registry, but as of version 0.2.5 it has taken over the 'grunt-jsic' name.


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsic --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsic');
```

## The "jsic" task

### Overview
In your project's Gruntfile, add a section named `jsic` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsic: {
    your_target: {
      files: {
        "destination file" : "source file",
        "destination file" : "source file"
      }
    }
  }
})
```


### Usage Examples

```js
grunt.initConfig({
  jsic: {
    development: {
        files: {
          "./fixture/dest1.js" : "./fixture/src1.js"
        }
      }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

[![Analytics](https://ga-beacon.appspot.com/UA-1150677-13/dsheiko/grunt-jsic)](http://githalytics.com/dsheiko/grunt-jsic)