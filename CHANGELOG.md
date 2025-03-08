# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Initial release of the Facebook Toolkit userscript.
- Added `CONTRIBUTING.md` file to guide new contributors.
- Added `CHANGELOG.md` file to keep track of changes, improvements, and bug fixes in each version.
- Added more detailed usage instructions, examples, and a section for frequently asked questions (FAQs) in `README.md`.
- Added a section for contributing guidelines and link to `CONTRIBUTING.md` in `README.md`.
- Added more fields or refined the existing ones to improve the bug report template in `.github/ISSUE_TEMPLATE/bug_report.yml`.
- Added more fields or refined the existing ones to improve the feature request template in `.github/ISSUE_TEMPLATE/feature_request.yml`.
- Added a step to verify code formatting using `deno fmt --check` in `.github/workflows/deno.yml`.
- Added steps to deploy the project to a staging environment in `.github/workflows/deno.yml`.
- Integrated security checks using `deno lint` with security rules or third-party security scanning tools in `.github/workflows/deno.yml`.
- Added comments and documentation to the code in `fbtoolkit.user.js` to make it easier to understand and maintain.
- Refactored the code in `fbtoolkit.user.js` to improve readability, modularity, and maintainability.
- Added unit tests for the functions in `fbtoolkit.user.js` to ensure they work as expected and to catch any potential bugs.
- Created a new directory named `tests` in the root of the repository to store the test files.
- Added a new test file, `tests/fbtoolkit.test.js`, to write the unit tests for the functions in `fbtoolkit.user.js`.
- Used a testing framework like Deno's built-in testing library to write and run the tests.
- Ensured the tests cover various scenarios and edge cases for each function.
