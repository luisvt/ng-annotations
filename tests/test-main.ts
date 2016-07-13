var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys((window as any).__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});
declare var require;
require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: (window as any).__karma__.start,

  paths: {
    'angular': 'node_modules/angular/angular',
    'angular-mocks': 'node_modules/angular-mocks/angular-mocks',
    'angular-resource': 'node_modules/angular-resource/angular-resource'
  },

  shim: {
    'angular-mocks': {deps: ['angular']},
    'angular-resource': {deps: ['angular']}
  }

});
