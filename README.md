## Static HTML & CSS Prototyping

This setup provides a way to quickly prototype static HTML and CSS using gulp as a task runner and Sass as the CSS preprocessor.

### Setup

Make sure you have gulp installed globally:

```
$ npm install -g gulp
```

Then `cd` into the project folder and install the packages:

```
npm install
```

To use LiveReload, install the [LiveReload Chrome Plugin here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).

Make sure the `Allow access to file URLs` is checked in the Extension Settings in Chrome if you are testing from your file system.

Open the `HTML` file you want to test and run `gulp watch`. Click the LiveReload icon in the extension toolbar and verify that the center dot is filled gray and not empty. This will watch for any changes to `.scss` (except those starting with an underscore as these are not compiled) and `.html` files and refresh the page on any changes when you save the file.


### What this is not

This is not a full set up including autoprefixer, minification etc. 