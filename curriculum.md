PROMPT:
I've decided we're going to create our own practice page. 
You are a renowned educator who thrives on creating custom problems for advanced students to practice coding. Your goal, right now, is to teach me the skill of practicing coding. Not the knowledge, not exam questions. 
This is the goal: 
Have a single repo that allows me to demonstrate the backend skills we've been learning here. You DESIGN the course in plain-language, another AI WRITES the UI for me. I write all the backend. 
We should start with the first things I learned and work our way back to what is current here. I should get to practice recalling important principles and syntax and work out some puzzles on my own. My brain should be working, not regurgitating. 
You can decide how to structure this. You can do a single page with links to our practice, just have a collection of different pages in the same repo, or have one site that builds on what we learn over time. The only requirement is that it builds slowly (let's not test 5 new concepts all at the same time). I would like you to write the design, including each prompt for each "mini-project" or practice project. Give me an overview prompt for the AI that tells it how to build the page, initial file structure, whatever. Each subsequent prompt should tell it something to add for me to practice on, unless that is unnecessary and you just want me to practice on the existing code. Please include my practice instructions. 
You are welcome to include small things that we haven't learned explicitly that I still need to learn but keep it to a minimum. Only when it's necessary, and especially it's okay if it's "coding as a skill not a knowledge" related. 
Keep in mind, the GOAL is a practice curriculum. The method is flexible for you. 
You are welcome to write instructions to put in an agents file for the AI to reference to for instructions on writing the code. 

OUTPUT:
I love this idea.

The key insight is that you're not trying to learn React. You're trying to learn **how to solve programming problems with React and JavaScript**.

Most tutorials accidentally train people to recognize solutions. Very few train people to create them.

I'd structure this as a single repo called:

```text
react-practice-lab
```

The AI builds UI scaffolding.

You write all logic.

Every lesson introduces one new concept while forcing recall of previous concepts.

---

## Project Philosophy

The AI should never implement the solution.

The AI may:

* Build layout
* Create components
* Create CSS
* Add placeholder text
* Add TODO comments

The AI must not:

* Implement state logic
* Implement event handlers
* Implement array operations
* Implement filtering
* Implement storage
* Implement effects

Those are your exercises.

---

# Agent Instructions

Give the UI AI this prompt once:

You are creating a React Practice Lab for a student.

Your job is ONLY to create visual scaffolding and TODO comments.

Never implement the programming exercise itself.

Allowed:

* Components
* Layout
* Styling
* Placeholder text
* Sample data when requested
* TODO comments

Forbidden:

* State logic
* Event handler logic
* Array method solutions
* Filtering logic
* Storage logic
* Async logic
* Effect logic
* Custom hook logic

Every exercise should render correctly while containing clearly marked TODO sections for the student to complete.

The student is expected to write all JavaScript and React logic.

---

# Initial Structure

```text
src/
|
├── pages/
│   ├── Lesson01Variables.jsx
│   ├── Lesson02State.jsx
│   ├── Lesson03Events.jsx
│   ├── Lesson04Arrays.jsx
│   ├── Lesson05Props.jsx
│   ├── Lesson06Forms.jsx
│   ├── Lesson07StateOwnership.jsx
│   ├── Lesson08Storage.jsx
│   ├── Lesson09Async.jsx
│   └── Lesson10Effects.jsx
|
├── components/
|
├── data/
|
└── App.jsx
```

App contains links to all lessons.

Think of it as a coding gym.

---

# Lesson 1: Variables and Rendering

Concepts:

* Variables
* Expressions
* JSX

AI Prompt:

```text
Build a page that displays a fake student profile.

The page should contain placeholder TODO comments where the student must:

1. Create variables.
2. Display variables in JSX.
3. Calculate values from variables.

Do not implement the solution.
```

Student Tasks:

```text
Display name
Display age
Calculate years until 30
Display favorite hobby
```

---

# Lesson 2: State

Concepts:

* useState
* rerendering

AI Prompt:

```text
Create a counter page.

Provide buttons and layout only.

Leave TODO comments for:
- count state
- increment
- decrement
- reset
```

Student Tasks:

```text
Implement all state.
Explain which component owns the state.
```

---

# Lesson 3: Events

Concepts:

* onClick
* event handlers

AI Prompt:

```text
Create a reaction game.

Provide buttons labeled:
Happy
Sad
Excited
Confused

Display an empty result area.

Do not implement logic.
```

Student Tasks:

```text
Track selected reaction.
Display current reaction.
```

---

# Lesson 4: Arrays

Concepts:

* map
* filter

AI Prompt:

```text
Create a movie browser page.

Provide movie data.

Create empty display sections.

Do not implement rendering.
```

Student Tasks:

```text
Render movie cards.
Show only movies above rating X.
Count displayed movies.
```

---

# Lesson 5: Props

Concepts:

* parent/child communication

AI Prompt:

```text
Create a reusable ProfileCard component.

Parent should pass:
name
role
image

Do not implement props usage.
```

Student Tasks:

```text
Connect props.
Render multiple cards.
```

---

# Lesson 6: Forms

Concepts:

* controlled inputs

AI Prompt:

```text
Create a pet registration form.

Fields:
name
species
age

Display section below form.

Do not implement logic.
```

Student Tasks:

```text
Track inputs.
Display live preview.
```

---

# Lesson 7: State Ownership

This is where the important React thinking begins.

AI Prompt:

```text
Create two sibling counters.

Each should display the same number.

Do not implement logic.
```

Student Tasks:

```text
Determine where state belongs.
Lift state up.
Make both counters update together.
```

This lesson is huge.

---

# Lesson 8: Storage

Concepts:

* localStorage
* persistence

AI Prompt:

```text
Create a simple notes page.

Textarea.
Save button.
Clear button.

Do not implement storage.
```

Student Tasks:

```text
Save notes.
Load notes.
Clear notes.
```

---

# Lesson 9: Async

Concepts:

* Promises
* async/await

AI Prompt:

```text
Create a fake weather page.

Provide mock fetchWeather() function that returns a promise after a timeout.

Do not implement async handling.
```

Student Tasks:

```text
Call promise.
Handle loading.
Handle success.
Handle errors.
```

---

# Lesson 10: useEffect

Concepts:

* side effects
* lifecycle

AI Prompt:

```text
Build a page that loads fake weather automatically.

Do not implement useEffect.
```

Student Tasks:

```text
Load data on mount.
Show loading state.
Display result.
```

---

# Capstone

After Lesson 10:

Build:

```text
Personal Dashboard
```

Features:

* Notes
* Counter
* Saved theme
* Weather widget
* Profile card
* Activity feed

Rules:

```text
No tutorial.
No walkthrough.
No AI-written logic.
```

You design:

* Components
* State ownership
* Effects
* Storage

---

The most important part of this curriculum is that every lesson asks:

```text
What data exists?
Who owns it?
What changes it?
What should happen when it changes?
```

Those four questions are the foundation of React thinking, and they scale all the way from a counter app to large production applications.
