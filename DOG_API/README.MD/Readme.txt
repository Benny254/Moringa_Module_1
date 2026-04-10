ASYNC JAVASCRIPT ASSIGNMENT: DOG EXPLORER APP
Assignment Overview
In this assignment, you will build a small frontend application called Dog Explorer using asynchronous JavaScript.
The purpose of this assignment is to help you strengthen your understanding of:
fetch()
async/await
handling loading states
handling errors using try/catch
DOM manipulation
working with data from multiple API endpoints
You will use data from the Dog API.

API Base URL
https://dogapi.dog/api/v2
Endpoints to Use
/breeds — get a list of dog breeds
/breeds/{id} — get details for a single breed
/facts — get random dog facts
/groups — get dog groups

Assignment Scenario
You have been hired to build a small web application for dog lovers called Dog Explorer.
Your application should allow users to:
View a list of dog breeds
Click on a breed to see more details
Fetch random dog facts
View dog groups
Handle loading and error states properly

Instructions
Part 1: Fetch and Display Dog Breeds
Create a section in your application that fetches dog breeds from the /breeds endpoint.
For each breed, display the following:
Name
Description
Hypoallergenic status
Life span
Male weight
Female weight

Part 2: Fetch a Single Breed by ID
When a user clicks on a breed, fetch that specific breed using the /breeds/{id} endpoint.
Display the breed details in a separate section on the page or in a modal.

Part 3: Fetch Dog Facts
Add a button labeled:
Get Dog Fact
When the button is clicked, fetch one random dog fact from the /facts?limit=1 endpoint.
Display the fact on the page.

Part 4: Fetch Dog Groups
Create a section that fetches dog groups from the /groups endpoint.
Display:
Group name
Related breed IDs if available

Part 5: Loading and Error Handling
For every API request in your app, you must:
Show a loading message while the data is being fetched
Handle any errors using try/catch
Display a user-friendly error message if something goes wrong
Examples:
“Loading breeds...”
“Failed to load dog facts. Please try again.”

Technical Requirements
You must:
Use fetch()
Use async/await
Use at least three separate async functions
Use try/catch in each API request flow
Update the DOM dynamically using JavaScript
Avoid hardcoding API data
You may not:
Use Axios
Use jQuery
Manually paste API response data into the page

Suggested File Structure
dog-explorer/
index.html
style.css
index.js

Suggested HTML Structure
You may use a structure similar to this:
A heading for the app
A button to load breeds
A button to fetch a dog fact
A button to load groups
A section for status messages
A section for facts
A section for breeds
A section for breed details
A section for groups

Suggested JavaScript Functions
Your code should include functions similar to the following:
fetchBreeds()
fetchBreedById(id)
fetchDogFact()
fetchGroups()
You may also create helper functions for rendering content and displaying status messages.

Deliverables
Submit the following:
index.html
style.css
index.js
GitHub repository link

