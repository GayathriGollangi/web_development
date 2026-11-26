# React Todo App

A simple Todo application built using React.js and JSON Server. This project allows users to manage their daily tasks with CRUD (Create, Read, Update, Delete) operations.

## Features

- Add new todos
- Display all todos
- Mark todos as completed or not completed
- Delete todos
- Store todo data using JSON Server
- Update data in the database using Fetch API
- Responsive UI using CSS Modules

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- CSS Modules
- JSON Server
- Fetch API

## Project Structure

```text
src/
├── components/
│   ├── AddTodo.jsx
│   ├── AddTodo.module.css
│   ├── TodoItem.jsx
│   ├── TodoItem.module.css
│   ├── Todos.jsx
│   └── Todos.module.css
├── App.jsx
└── main.jsx

db.json
package.json
README.md
```

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | `/todos`     | Fetch all todos    |
| POST   | `/todos`     | Add a new todo     |
| PATCH  | `/todos/:id` | Update todo status |
| DELETE | `/todos/:id` | Delete a todo      |

## React Concepts Practiced

- Functional Components
- useState Hook
- useEffect Hook
- Props
- Event Handling
- Array Methods (map, filter, find)
- Spread Operator
- Async/Await
- Fetch API
- CRUD Operations
- CSS Modules

## Learning Outcome

Through this project, I practiced managing state in React, passing data between components using props, handling asynchronous API requests, and implementing CRUD operations using JSON Server.
