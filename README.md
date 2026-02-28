# Todo Application

A React-based Todo Application built with Create React App (CRA), focused on practicing foundational React concepts through iterative feature development.

## Overview

This project was initiated during my second week of learning React. Development has primarily focused on the `src` directory, where I continue to enhance functionality and strengthen component-level patterns.

## Interviewer Snapshot

- **Project Goal:** Build a usable todo manager while reinforcing React fundamentals
- **Current Scope:** Frontend-only implementation with local, in-memory state
- **Core Outcome:** Demonstrates component composition, state transitions, and user-driven CRUD flows

## Key Features

- Display a predefined list of todos
- Add a single todo item
- Add multiple copies of a todo in one action (e.g., `Read a book 3`)
- Edit existing todo titles
- Delete todo items
- Toggle completion state using a checkbox (UI state per item)

## React Concepts Applied

- Class and function components
- Props-driven component communication
- State initialization and updates
- Event handling for form and button actions
- Conditional rendering for edit/view states
- List rendering with stable keys
- Immutable state update patterns

## Implementation Highlights

- Parent-child state flow where `SimpleTodos` manages list data and `TodoItem` handles item-level interactions
- Clear event-driven handlers for add, edit, delete, and completion toggle actions
- Conditional rendering for edit mode to switch between read and update interfaces
- Utility-like input behavior for quick bulk creation (text + numeric suffix)

## Tech Stack

- React 17
- Create React App (`react-scripts`)
- JavaScript (ES6+)
- CSS

## Project Structure

```text
src/
  App.js
  App.css
  index.js
  components/
    SimpleTodos/
      index.js
      index.css
    TodoItem/
      index.js
      index.css
```

## Getting Started

### Prerequisites

- Node.js
- npm or pnpm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

Access the app at `http://localhost:3000`.

## Available Scripts

- `npm start` — Run the app in development mode
- `npm test` — Launch the test runner
- `npm run build` — Create a production build
- `npm run lint` — Run ESLint
- `npm run lint:fix` — Auto-fix lint issues in `src`
- `npm run format` — Format `src` with Prettier

## Trade-offs and Current Limitations

- Data is not persisted across refreshes (no backend/local storage yet)
- Completion and edit state are UI-driven and not centralized globally
- Minimal validation and no advanced error handling

## Next Improvements

- Persist todos using `localStorage` or an API layer
- Add filtering (All / Active / Completed)
- Add due dates and priority metadata
- Improve accessibility and keyboard-only interactions

## Notes

This repository reflects an active learning project and is continuously improved with small, practical enhancements.
