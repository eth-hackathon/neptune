[![Netlify Status](https://api.netlify.com/api/v1/badges/532c73bd-e674-47dc-bd14-55c565324736/deploy-status)](https://app.netlify.com/sites/hackaton-neptune/deploys)

After pulling, do not forget to `npm install`

# Folders

### Components

Holds the individual components that are used throughout the app. Presentational, without state.

### Layouts

Holds the stateful components that wrap the `pages`. These hold the state, and have the navigation for the different parts of the app.

### Pages

Holds the actual pages that are rendered within the different `layouts`, like the components, we avoid having state in them, making them presentational too.
