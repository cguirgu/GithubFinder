# GithubFinder

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
  <img src='./public/contextapidiagram' />
