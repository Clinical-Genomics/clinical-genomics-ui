
## About

[Clinical Genomics UI](https://cg-internal-portal-prod.web.app/) is the internal portal for [Clinical Genomics](https://www.scilifelab.se/facilities/clinical-genomics-stockholm/)


![Clinical Genomics logo](https://github.com/Clinical-Genomics/clinical-genomics-ui/blob/master/src/assets/cg-big-logo.png)


## Available Scripts

To install dependencies run:

### `yarn install`

The environmental variables needed to run the app are:
* **GOOGLE_OAUTH_CLIENT_ID** Google Client Id needed to login with your Google account
* **BACKEND_TRAILBLAZER_URL** URL for the Trailblazer service endpoint
* **BACKEND_CLINICAL_URL** URL for the Clinical service endpoint

To run the app with the environmental variables:

`GOOGLE_OAUTH_CLIENT_ID="client-id-for-the-app" BACKEND_TRAILBLAZER_URL="url-for-the-trailblazer-backend-service" BACKEND_CLINICAL_URL="url-for-the-clinical-backend-service" yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3030](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the Jest test runner.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

For consistency and code quality [Eslint](https://eslint.org/) is used.
Running:
### `yarn lint`
will display linting issues.

To fix these errors run:
### `yarn lint --fix`


To analyze the minified bundle with source-map-explorer run:
### `yarn analyze`


The app is deployed to Firebase via GitHub actions.

[Staging build](https://cg-internal-portal-prod.web.app/)<br />
[Production build](https://cg-internal-portal-prod.web.app/)<br />

