**CID:** [01956128]

# Project
This repository is for the submission of your **Computing 2: Applications** coursework.

You should complete the proforma and populate this repository with your project submission.

* **Repository Creation Check:** Tuesday 4th May 18:00 – Update your CID in this file to check your submission.
* **Peer Assessment Deadline:** Tuesday 8th June 18:00
* **Final Submission Deadline:** Thursday 17th June 16:00

# Computing 2 Submission Proforma

For each section, write a maximum of 200 words.

## Brief

I decided to create a calendar and deadlines list to create a web app that enables the user to store deadlines while looking at a calendar that can cycle through dates. The current day is also highlighted to show what date of the year it is.

The main challenge was to align the dates to match the weekdays for each specific month. This was achieved by using the dates from the prior month to fill in spaces so that the rest of the dates would align automatically as you switch the dates.

The second portion of the web app is a task list labeled as "deadlines." This way, the user will be able to store tasks while simultaneously looking at the calendar to see as the deadline approaches. The tasks can be labeled completed once done or deleted at any time with a simple button.

## Coding

I began with designing the HTML file and CSS file before beginning the coding. Throughout the coding process, I navigated between the javascript files and web-app page using a split screen to avoid errors. My initial approach was making a web app with a minor user interface that functioned as desired. Once the calendar was designed, I revised the HTML and CSS file again to include a task list that will improve the user-interface aspect of the web app. Throughout the coding process, I used commenting and separate javascript files to organize my codes so that it was easier to access when desired. Finally, I create tests to ensure that the code will function with arbitrary user interactions. 

## UX/UI

Through editing the "default.css" file, I aimed to make a template that looks professional with its choice of color, font, and layout. The user interface was also designed to be easy to navigate around through some of the symbols used (i.e. arrows, trash button, check button, save button, and add button). I attempted to make the program more interactive with the user by giving properties to the tasks in the "deadlines" section and making the calendar interactive; however, aspects of the handler failed when first attempting to store the state of the month and store "deadlines."

## Data
*Explain how you structure and process your data.*
There is the main javascript file, "main.js", that calls from other files such as "calendar.js" and "tasks.js" to retrieve functions. The constant values and variables are defined in the main function. Furthermore, there is a CSS file labeled "default.css" that determines the layout and user interface of the web app. When attempting to store values, the Handler file saves the task lists and returns the list when refreshing the page.

## Debugging
*Describe how you used debugging practices and tools and how they helped you overcome a bug or conceptual issue.*
I was able to solve issues via logging values through the console whenever an event listener occured. This enabled me to check if the function is able to process. Furthermore, through JSLint and labeling the processes, I was able to tidy up the javascript and locate portions of the coding simply.

## Best Practice
*Outline your use of software development best practices*
