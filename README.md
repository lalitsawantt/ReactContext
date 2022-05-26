# ReactContextToDoApp

## Introduction
Simple To-Do list app created using [React](https://reactjs.org/) and [React Context API](https://reactjs.org/docs/context.html). Uses react-strap for styling. This is a front-end only app. The purpose of building this was to learn context API with actions and reducer.

## Features
* Add a to-do item to the list
* Remove a to-do item from the list

## Implementation
This app uses context API to store the to-do list globally and pass it down to the to-do list presentational component. On adding a todo item, an ADD_TODO action is dispatched, which adds the todo item which consists of a description field and an id, the id is being created using [uuid](https://www.npmjs.com/package/uuid). On removing a todo item from the list, a REMOVE_TODO action is dispatched, which removes the particular todo item based on the id from the global state.
