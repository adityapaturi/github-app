This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This will display all the repositories under a org in GitHub. The API used in this project provides only 30 items per request and doesn't give any options for specifying sort order. So, only 30 last recently changed projects are shown and they are sorted by star count.

## How to use
Node version used `8.11`(npm version `5.6`).

Switch to project directory run
### `npm install`

### `npm start`


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

By default we shows repos for `facebook`. If you want to see repos under a different org please append the org's GitHub identifier to the url. Ex. to view repos under Microsoft org please browse to [http://localhost:3000/microsoft](http://localhost:3000/microsoft)


