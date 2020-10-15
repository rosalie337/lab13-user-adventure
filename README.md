# lab13-user-adventureLab 13: User Adventure Quiz - Day 1
===

Build a user adventure, quiz, or game that follows this pattern:

1. User Info Page - starting information for user
1. List Page - user presented with list of quests, tasks, or topics (generated from metadata)
1. Quest or Task Page - user completes Quest, task, or topic (generated from metadata and URLSearchParams)
1. Repeat thru steps #2 and #3 until end conditions
1. Final results page on end condition(s)


### Learning Objectives
- Track the state: user choices for each question, which questions they've already answered
- Track the state: and ANY OTHER STATE (hp, gold, etc) your project requires
use state data for products to render radio buttons to get user input	Get the user's name and render it to the screen
- Render all the questions as links on a list page
- When the user clicks on a link in the list, link them to the detail page for that question
- Update state based on the user's response to the question (update how many questions they've answered, how the answer affected their score, etc)
- When the user runs out of questions (or otherwise triggers an end state) take them to a results page
- Use query parameters on the detail page to figure out which question the user is answering. Populate this page in javascript using ids and metadata.

## Standard Setup Process

[x] Create a repo called `lab-13-user-adventure` on Github
    - make sure to click add a `README.md`
[x] Copy the URL of the new repo
[x] From the command line (terminal) clone your repo:
    [x] `git clone <url>`
    [x] **`cd` into your repo from the command line**
    [x] `npx create-alchemy-bootstrap .`
    [x] Launch vscode with `code .`

## Goals

### Day 1

The goal for the first part of the lab:

1. (Meta)data created to describe each step of adventure or quiz
1. User info page that saves user object to local storage
1. Load list of quests or tasks and display. Each item links to quest/quiz page with the id of the item as a query parameter
1. Quest or task page reads the query parameter and loads that item on the page, including text, images, and/or audio/video - plus creates question prompts and inputs in form

### Day 2

The goal for the second part of the lab:

1. Quest or task page:
    1. Retrieves user object from local storage
    1. Responds to user choice(s) and adjusts the user object accordingly
    1. User clicks or is redirected back to list of quests/tasks.
1. List page 
    1. Examines user object and detects end conditions, redirected to end page
    1. Renders completed items differently
1. End page
    1. Process/score results
    1. Present results to user
    1. Optionally "start over" link

## Day 1 Tasks

### Design Game or Quiz

Create metadata that describes the adventures or questions that will be presented to the user. This data needs to be consistent, meaning each item needs to have the same information. Think about:

1. Common descriptors like title, description, and image, audio, and/or video.
1. What are the choices to be presented to the user, and what are the "consequences", or adjustments that are to be made to the user object

### User Info Page

Goal of this page is to initialize a user object for tracking/scoring. Gather information from the user, like name and other starting choices.

1. Testing: write a tested function that takes a FormData instance and pulls relevant information to add to a user object which represents initial state (initialize numbers, objects, and/or arrays). Use a `completed: {}` property and object to track which quests or quiz question the user has completed.
1. Use this function in the `submit` handler from the form to create your user object
1. Save object to local storage
1. Redirect to next step in the game

### List of Items Page

This page presents the available quests, questions, or tasks - which link to the Quest/Question Page with the corresponding id

1. Import metadata
1. Loop through items and create links for each one
    1. Use `href` like `quest/id=dragon` to "pass" the selected id to the quest page

### Quest/Task/Question Page

Design your page for showing an item

1. Import metadata 
1. Read the query parameter using `UrlSearchParams` built-in browser class
1. Use your `findById` function to find the metadata item with that id
    1. redirect back to list page if id not found
1. Update the dom:
    1. Static one-time things like title, image, etc.
    1. Loop through choices and create form input controls (like radio buttons) for each choice


---

## Points Break Down

Looking For | Points (10)
:--|--:
[x] Hosted on GitHub with URL in About section | 1
[ ] Consistent, good Metadata for App | 1
[ ] User Info Page | 1
[ ] Make and Save User Object | 2
[ ] List of Quests/Questions with query param links | 2
[ ] Quest/Question Page uses query id to load correct data | 1
[ ] Quest/Question Presents Question Information | 1
[ ] Quest/Question Presents Question Choices | 1