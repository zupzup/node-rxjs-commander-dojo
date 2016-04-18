# node-rxjs-commander-dojo
Coding Dojo with NodeJS, RxJS and commander.js

# Setup

- npm install
- npm run dev

# Utilities
- npm check for linting with eslint

# data

- ./data/issues.json, the issues the user worked on in some way - jira api e.g.: https://jira.example.com/rest/api/latest/search?jql=(participants = userName or assignee = userName) and updatedDate >= 2016-04-01
- ./data/worklogs.json, a user's worklogs for a period - tempo API, e.g.: https://jira.example.com/rest/tempo-timesheets/3/worklogs/?dateFrom=2016-04-01
