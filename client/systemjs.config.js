/* global System */

System.defaultJSExtensions = true;

System.config({
  baseURL: document.baseURI,
  transpiler: "babel",
  babelOptions: {
    stage: 1,
    optional: [
      "runtime"
    ]
  }
});


System.config({
  meta: {
    '*.css': { loader: 'css' }
  },
  paths: {
    "~/*": "*.js",
    "github:*": "https://github.jspm.io/*.js",
    "npm:*": "https://npm.jspm.io/*.js",
    "cdnjs:*": "https://cdnjs.cloudflare.com/ajax/libs/*.js",
    "css": "node_modules/systemjs-plugin-css/css.js"
  },
  map: {
    "angular": "npm:angular@1.6.4",
    "angular-mocks": "npm:angular-mocks@1.6.4",
    "angular-animate": "npm:angular-animate@1.6.4",
    "angular-aria": "npm:angular-aria@1.6.4",
    "angular-ui-bootstrap": "cdnjs:angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min",
    //"angular-ui-router": "cdnjs:angular-ui-router/1.0.0/angular-ui-router.min",
    "angular-ui-router": "https://raw.githubusercontent.com/angular-ui/ui-router/1aca6512ed19a5ca4c4c4bc91964bb17b643978f/release/angular-ui-router.min.js",
    "babel": "npm:babel-core@6.26.0",
    "babel-runtime": "npm:babel-runtime@6.26.0",
    "core-js": "npm:core-js@2.4.1",
    "prefixfree": "https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js",
    // 'services' : '/services',

    "text": "https://raw.githubusercontent.com/systemjs/plugin-text/e67ff10363cc3f89dee4395d1e6d309b54c39485/text.js"
  }

});