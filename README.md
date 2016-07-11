# Yewno Front Engineer Assignment

## Your Task

We would like you to build a simple Todo app with the following requirements:

- Each todo is composed of a string of text, a completion checkbox and an expiry date & time.
- The user should be able to create and remove todos.
- A todo should be removed at it's expiry time if it is marked as complete.
- If a todo is incomplete after it's expiry, it should removed immediately upon being marked as complete.  
- Application state should be handled using a state container library such as Flux, Reflux or Redux (or you may roll your own if you prefer).
- The UI need not be overly sophisticated, but should represent accepted best practices.  
- You need not worry about the user closing the window (unless of course, you wish to as a stretch goal).
- Your completed app should run a modern web browser.

We are looking for process over completeness: we would rather see well thought out and engineered code over rushed work.  The purpose of this assignment is to judge your intuition and judgement when designing and implementing a modern web application.

## Getting Started:

We've included a skeleton Webpack, Babel, React and Reflux app to get you started.  We've chosen these technologies because we find them to be easy and enjoyable right out of the box.  You are welcome to not use some or all of them if you so chose.  

If you do chose to use it, you may use the following steps to complete setting it up.

1. Make sure you've got nodejs installed.
2. Clone this repo & `cd` into the root directory
3. Install necessary npm packages using `npm install`.  
4. Install webpack and webpack-dev-server shell commands: `npm install -g webpack webpack-dev-server`
5. `npm start` to start the webpack-dev-server.
6. Navigate to `localhost:8080`.
7. (Optional) To build (eg. for production), run `npm run build`

## Submission

We've tried to leave the assignment open ended to permit you to express your best judgement and stylistic preferences.  In the event you need clarification, you mail email Joey directly at joey@yewno.com.  

Please host via GitHub or other favourite public git repo and email Joey a link.  Annotated source code is not necessary but we appreciate it if you point out anything particularly interesting in your code.  Ensure that you make regular commits with appropriate commit messages-- A line or two is sufficient.  Also ensure that you include all necessary libraries in your package.json file.  

**Remember: We're more interested in process over output**.  

## Stretch Goals
Have fun and try to impress us!  Some recommendations include:

- Use local storage to preserve the todo list.
- Style items based on their urgency.
- Keep track of the percentage of tasks that are completed on time.
- Make the UI responsive and a joy to use on any device.
