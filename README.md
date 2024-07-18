## Instructions on how to run the project

* npm install
* npm run dev

## Explanation of implementation of the features

### Transfer the project to TypeScript

The project has been migrated from JavaScript to TypeScript. Key changes and configurations include:

* tsconfig.json: Configuration file updated with TypeScript compiler options.
* Dependencies: Installed TypeScript and necessary typings (@types/react, @types/react-dom, etc.).

### Create a List Component

The UserList component fetches and displays user data from the JSONPlaceholder API endpoint https://jsonplaceholder.typicode.com/users. Each user entry displays: ***id***, ***name***, ***email***, ***username***, and ***phone***.


### Create a Form Generator Component

The FormGenerator component is designed to create scalable and reusable forms:

* Validation Schema: Utilizes Zod for defining validation rules.
* API Hook: Uses React Quary for handling form submissions and API calls (POST to JSONPlaceholder https://jsonplaceholder.typicode.com/posts).
* Form Rendering: Accepts a callback function (renderForm) to render form elements and manage their state.


### Create a Page Generator Component

The PageGenerator component dynamically generates web pages based on provided data:

* Dynamic Layout Handling: Supports various page layouts defined in SectionData.
* Scalability and Reusability: Easily scalable to accommodate future layout types and reusable across different pages.
* Component Rendering: Renders different components (componentHero, componentItemsShowcase, componentTrustBar) based on data provided.