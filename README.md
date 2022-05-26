# ReactContextToDoApp

## Introduction
Simple To-Do list app created using [React](https://reactjs.org/) and [React Context API](https://reactjs.org/docs/context.html). Uses react-strap for styling. This is a front-end only app. The purpose of building this was to learn context API with actions and reducer.

## Features
* Add a to-do item to the list
* Remove a to-do item from the list

## Implementation
This app uses context API to store the to-do list globally and pass it down to the to-do list presentational component. On adding a todo item, an ADD_TODO action is dispatched, which adds the todo item which consists of a description field and an id, the id is being created using [uuid](https://www.npmjs.com/package/uuid). On removing a todo item from the list, a REMOVE_TODO action is dispatched, which removes the particular todo item based on the id from the global state.

## Screenshots
1. Initial Render

    <img width="1420" alt="Screenshot 2022-05-26 at 5 19 44 PM" src="https://user-images.githubusercontent.com/49080591/170482948-f061d3aa-e8b3-4af5-8185-72d101600123.png">
    
    
    
    
    
2. Adding a to-do item

    <img width="1421" alt="Screenshot 2022-05-26 at 5 23 49 PM" src="https://user-images.githubusercontent.com/49080591/170483116-0d4afe0b-3746-4751-a862-0bc51d7244ac.png">
    
    
<img width="1420" alt="Screenshot 2022-05-26 at 5 24 51 PM" src="https://user-images.githubusercontent.com/49080591/170483239-80330f14-4de2-470b-acf6-efd82b462cd2.png">





3. Removing a todo item

  <img width="1419" alt="Screenshot 2022-05-26 at 5 26 57 PM" src="https://user-images.githubusercontent.com/49080591/170483860-19893532-760c-4f20-aea8-5041cf5261d5.png">


  <img width="1420" alt="Screenshot 2022-05-26 at 5 19 44 PM" src="https://user-images.githubusercontent.com/49080591/170483916-cce31d1b-00fb-4aae-9d1c-d656796c4262.png">
