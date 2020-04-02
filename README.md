## Getting Started

To get you started you can simply clone the `stackWebInterface` repository and install the dependencies:

### Prerequisites

You need git to clone the `stackWebInterface` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `stackApp`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `stackApp`

Clone the `stackApp` repository using git:

```
git clone https://github.com/angular/stackWebInterface.git
cd stackWebInterface
```

If you just want to start a new project without the `stackWebInterface` commit history then you can do:

```
git clone --depth=1 https://github.com/angular/stackWebInterface.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code. The tools
help us manage and test the application.

* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we
can simply do:

```
npm install
```

Behind the scenes this will also call `npm run copy-libs`, which copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                  --> all of the source files for the application
  app.css               --> default stylesheet
  core/                 --> all app specific modules
  stackApp/                --> the stackApp view template and logic
    stackApp.html            --> the partial template
    stackApp.js              --> the controller logic
    stackAppService.js       --> the service
    stackApp_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
karma.conf.js         --> config file for running unit tests with Karma
package.json          --> Node.js specific metadata, including development tools dependencies
package-lock.json     --> Npm specific metadata, including versions of installed development tools dependencies
```


## Testing

There are two kinds of tests in the `angular-seed` application: Unit tests and end-to-end tests.

### Running Unit Tests

The `stackApp` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have a `.spec.js` suffix (e.g.
  `stackApp.spec.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```


## Updating AngularJS and other dependencies

Since the AngularJS framework library code and tools are acquired through package managers (e.g.
npm) you can use these tools to easily update the dependencies. Simply run the preconfigured script:

```
npm run update-deps
```

This will call `npm update` and `npm run copy-libs`, which in turn will find and install the latest
versions that match the version ranges specified in the `package.json` file.

If you want to update a dependency to a version newer than what the specificed range would permit,
you can change the version range in `package.json` and then run `npm run update-deps` as usual.


### Running the App during Development

The `stackWebInterface` project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from any folder by running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just
configure your server to serve the files under the `app/` directory.

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are the files under the `app/` directory.
Everything else should be omitted.

AngularJS apps are really just a bunch of static HTML, CSS and JavaScript files that need to be
hosted somewhere they can be accessed by browsers.

If your AngularJS app is talking to the backend server via XHR or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and web server(s).



## Contact

For more information on AngularJS please check out [angularjs.org][angularjs].


[angularjs]: https://angularjs.org/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[selenium]: http://docs.seleniumhq.org/
