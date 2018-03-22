# Project Proposal Outline

**Description**: I would like to build an extensive site one day that will host multiple sports related games consisting of Sports Jeopardy, League Name Game, RealFan Trivia to name a few. 

For this particular project and to start this site, I am going to build a Sports Jeopardy based game. 

![52166759231](C:\Users\GP\AppData\Local\Temp\1521667592311.png)



**Core Features**: 

- The Expectation is that when a user visits the app they will be greeted upon arrival and asked to provide a username. From here the user will be able to select a link taking them to the jeopardy game feature. 
- Once in the game, the header will list their username, and a score will be next to their name (this score will be stored at the end of the game)
- The game will be prepopulated and the user will now be able to click from 6 categories that have 5 questions in each category with the questions getting tougher.
- Each Question (Card) Box will be a card the pops out and flips over revealing a question, it will be followed with 3 multiple choice selections. If user gets the question right it will add the value of the question to the players score.
- The game ends when the player answers every question on the board and gets a final score. They will have the option to play again.

**Stretch Features**:

**Nice to have one day features**: a multiplayer version (as well as a multiplayer version from various locations), a pop up chat box for trash talk, an experience level handler,  adding daily doubles with wagering, a feature that lets you choose either multiple choice or answer fill in blank.

**Amazing to have down the line features include**: allowing the user to customize the gameplay (specific to a sport/ or adding non sports categories), multiple game options for each sport instead of just using jeopardy (ex: name games, trivia games, where did he go to college, whose stats are these, players who wore jersey number, what teams did play for), an incredible library of questions so gamers very rarely if ever get repeated questions.


**User Stories**: When a user goes to this app they are directed to the home page that welcomes them. They will be asked for their username 

**Tech-Stack**: 

- Node and React 

  - Components

    - A Home Page that will ask the user for a username greet them and welcome them to the game.
    - A Header - featuring a widget with sports scores from the Big Three Sports Leagues (MLB,NBA,NFL)
    - A Game Header featuring the users username, and score accumulated


    - A Timer for each question and how long the player can try and guess at it for
    - Cards - that flip over when picked that reveal a question
    - Audio - that is played when a question is displayed and the timer is running. Also audio for the card when it gets picked (whoosh like) and when the card is complete it will do a (whoosh sound and say the words Done and go back in place)
    - A Reset Button - Once the game is completed if want to play it again click this button to reset that game.
    - A NewGame Button -  Once the game is completed if want to play again click this button to start a new game. 

- NPM Packages I will be using and require : axios, express


**Description of Data**:

My application will be a react based app and focus on what we have learned in the course over the last 9 weeks. It will be component focused and need bunch of css for styling purposes. Images will be used, as well as audio to make the game pop. The user will have to make selections and the data will have to provide if the user is correct. A database will store the questions and the players results.

## Front-End: 
The app will be a SPA - The app will have a Home Page with a welcome and link to the jeopardy game and eventually links to the future games when they can be added.

## Server-side:
 - endpoints -  
 - database schemas (if using db) - postgres to store user data and questions

**Project Timeline** - 

Day 1(Wednesday) - create a layout on (powerpoint) to see how i want my app to look. Setup project, create react app , setup all the necessary folders, do all the component creating 

Day 2 - create the data that will be used for the questions and answers, start to populate the components with the beginning written code

Day 3/4/5- complete the components so that they can be imported and tested on the main app.js, determine if the layout was as deemed by the original created layout, do enough css to make it look the intended way, create the linking of pages and connections, Work on extra components like audio, reset, and replay to be implemented once the game has practical use, add more data.

Day 6 - Have enough code that the game can be run in a test run setting, fix as many errors and bugs that continue to arise

Day 7 - Work on any extra features that can be implemented to make the app have more functionality

Day 8 - Finalize the CSS, finalize testing and verification

