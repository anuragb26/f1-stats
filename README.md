## Schema Service API

## FinCompare Front-end challenge

This project contains UI codebase for the FinCompare Front-end Challenge
(https://github.com/fincompare/frontend-challenge)

## Public url

https://f1-stats.netlify.com/

## Flow

1)On page mount, show a list that shows the F1 world champions with relevant information starting from 2005 until 2015
2)Click on any element to open the collapsible content which has the winners of all races for that year in tabular format
3)The row where the winner is the same as the world champion of that year is highlighted.
4)Also added Filter functionality for driver name and constructor name.

## Getting Started

Local Setup:

1. npm install
2. npm start

   This will start the server at http://localhost:3000/

## Prerequisites

1)npm
2)node

## Tech Stack

Reactjs (scaffolding -> create-react-app) ,React Router v4  
Styling -> SCSS, Bootstrap4(Reactstrap library based on bootstrap4 -> https://reactstrap.github.io/ )

## Folder Structure.

src/containers -> React Components mapped to the routes...can be later used for redux store.  
src/components -> React Components  
src/assets -> Images,svgs and fonts(whichever necessary)  
src/hoc -> Higher Order Components  
src/constants -> Config Variables.  
src/styles -> SASS based Styles over-riding bootstrap variables wherever necessary  
src/utility -> Files for Helper functions.

## Code formatter

prettier -> (https://prettier.io/)  
Configured a pre-commit hook in package.json which will automatically format the changed files as per the
config set in .prettierrc

## Commit Messages

https://seesparkbox.com/foundry/semantic_commit_messages

## Author

- **Anurag Bajaj** (anuragb26@gmail.com)
