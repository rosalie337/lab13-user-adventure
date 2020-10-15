# lab13-user-adventure

### Warm-up: Counting duplicates in an array

## Agenda

1. User Info
1. Hashmaps and "Dynamic" Object Properties
1. Change page via `window.location`
1. Search Params

## Metadata

On the quest page, we will generate almost the whole view off of hard-coded data.
    - All quests are basically the same: they have titles, choices, and an image, among other things
    - So why bother coding a whole hard coded page for each quest? Get the quest id from the url, and use the metadata to populate the page according to that id.

![](./quest-metadata.png)

## User Info

1. Treat user data like any other piece of data
1. Store game/quest/info on user object
1. Here is the data model for the demo adventure quest:

```js
const user = { 
    completed: {
        dragon: true, 
        treasure: true,
        },
    gold: 130,
    hp: 35,
    name: "dani",
    race: "cleric",
}
```

- Why store completed quests as this weird object instead of an array?
- Accessing the quests with dynamic object properties:

```js
user.completed.dragon // resolves to true

user.completed['dragon'] // also resolves to true

const questName = 'dragon';

user.completed[questName] // therefore this also resolves to true, even though there is no key 'quest name'

user.completed.questName // returns null, since there is no property called questName
```
## Change Page 

Use JavaScript to change the page:

```js
window.location = 'page.html'
```

## Search Params

Communicate choices between pages with search params (aka query string):

```js
const searchParams = new URLSearchParams(window.location.search);
```

## "Dynamic" Object Properties

Traditional property by `.` (dot notation):

```js
const cat = { name: 'felix' };
const message = 'The cat is ' + cat.name;
```

Square brace notation (`[` & `]`) can be used
to specify an property by the value in a variable:

```js
const cat = { name: 'felix' };
const property = 'name';
const message = 'The cat has a ' + property + ' of ' + cat[property];
```

## Timers

Use `setTimeout` to set a timer.
Use `setInterval` to set an ongoing timer.

```js
console.log('the alarm will go off in five seconds')

const cancelId = setTimeout(() => {
    console.log('alarm! ALARM!!!')
}, 5000);

// you have 5 seconds to call clearTimeout(cancelId);

const cancelId2 = setInterval(() => {
    console.log('BEEEEP! i will keep beeping once a second until you put your seatbelt on', Date.now())
}, 1000);

function putOnSeatbelt() {
    clearInterval(cancelId2);
}

putOnSeatbelt();
```


## Plan with Validation Steps
![](./quest-breakdown.png)