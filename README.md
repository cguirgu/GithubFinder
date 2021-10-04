# GithubFinder

Application that allows you to search users within Github and see information about them.

_TECH:_ React, Context API, Hooks, Netlify, Javascript, Github API

# Notes

## Hooks

Functions that let us hook into react state and lifecycle features from a function component

- useState: allows use to have a state within a functional component
- useEffect: allows us to mimic the lifecycle methods like componentDidMount, etc. ( have side effects in our compenent; ex: fetch users when the component loads)
- useContext: used with the Context Api; makes it very easy to bring in your context to any component)
- useReducer: used with the Context Api; allows use to create a Redux-like reducer without using Redux
- ...

## Context API

- cloud that hovers over application that we can get stuff from
- helps remove prop drilling
  <img src='./public/contextapidiagram' alt=''/>

## Netlify Deployment

### 1. Run 'npm i -g netlify-cli'

- using cli, importing netlify package

### 2. Add 'netlify.toml' file to your root

- Specifies a build folder; when we run 'npm run build' it will create a folder called build and that's our production build

### 3. run 'netlify init'

- make sure you are logged into Netlify on the browser
- Site Name must be unique

### 4. Deploy Settings on the project on Netlify.com

- Add Client ID and Client Secret as Environment Variables

### 5. Run 'npm run build'

- builds out our application

### 6. Run 'netlify deploy --prod'

- deploys app!

### (Optional) 7. Add a domain from Netlify.com

- https://www.namecheap.com/?gclid=CjwKCAjwqeWKBhBFEiwABo_XBqBkKEmW6iKKmkZaqrF3lFxw_pMH_XPEIaa5nsR4ua2h_U3BgkRXEhoCqFkQAvD_BwE
