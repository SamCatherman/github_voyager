simple interface for searching github profiles using react

To run, clone this repository, and run the following commands:

```
$ git clone git@github.com:SamCatherman/github_voyager.git
$ cd github_voyager
$ yarn install && yarn start
```

Simply enter a github username and view details of the user's profile.

The application's main state lives in `SearchContainer.js`.
Data returned from `utils/API.js` is passed to `Result.js` as props.
Queries to the API are passed to the container's state via `SearchForm.js`.

Live version of the application can be viewed here: https://github-voyager.herokuapp.com/
