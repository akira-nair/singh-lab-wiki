# Redesign of Singh Lab website
website built April, 2024 by Akira Nair
wiki built April, 2024 by Wangdrak Dorji, Manav Chakravarthy, Akira Nair

## Guide
This web app was developed using React and uses Chakra UI as a component library. To run the app locally, clone this repository and run
```
cd singh-lab
npm i
npm start
```
For more information on the React framework, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and the [React documentation](https://reactjs.org/).

## Editing Site
Most of the web content has been organized for easy editing in JSON files located in `singh-lab/public/data/`. There are files corresponding to the lab member profiles, lab projects, and publications. I have included examples of how to structure the JSON objects so that you can edit or append new data. Images can also be stored in `singh-lab/public/assets`.

There are six pages on this website: Home page, About us page, Publications page, Lab updates/News page, and Wiki portal page. Please find the code for those pages in `singh-lab/src/pages/`. While most of the pages have associated JSONs, the News page does not. To allow for more flexibility in curating content in a lab update, there is a commented section that shows you how you can make a customizable lab update "card". 

## Maintenance
Given that React is a framework taught in several courses at Brown such as CS 0032 and CS 1300, it would be appropriate for lab members who have enrolled in such courses (or have prior software engineering experience) to help maintain the website. 

## Contact
Any questions can be forwarded to *akira_nair@alumni.brown.edu*


> Thank you for supporting me throughout my research journey at Brown, Professor Singh! - Akira N.