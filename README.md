# qa-api-services

The library to get access to the 'Setapp' API services in your E2E UI tests

## Contributing guide

1. Create feature branch and perform changes.
2. Push changes to the origin and create pull-request.
3. After pull-request merging update local master.
4. Bump version and add a tag (for example using `npm version`).
5. Push changes to the origin.
6. Publish a new version to the GitHub Packages.

**TIP**: you can use [np](https://github.com/sindresorhus/np) to perform steps 4-6 automatically

## Versioning rules

Given a version number MAJOR.MINOR.PATCH, increment the:
* **patch** - when you make backwards-compatible bug fixes
* **minor** - when you add functionality in a backwards-compatible manner
* **major** - when you make incompatible API changes

## Debug mode

The [debug](https://www.npmjs.com/package/debug) package is using to log API requests/responses data. By default, all logging of API calls disabled  
Please, use `DEBUG=macpaw:qa-api-services` key in the main project to enable logging:

```js
DEBUG=macpaw:qa-api-services npm run e2e-local
```
