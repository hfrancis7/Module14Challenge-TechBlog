# Module 14 - Tech Blog
  ![License:MIT License](https://img.shields.io/badge/License-MIT-yellow.svg) 

  ## Description
  
  I needed to make a CMS-Style blog where users could make posts and comments to talk about things happening in the tech world.
  
  This website allows users to make posts and comments through creating their own user accounts.
  
  I learned a lot about the MVC framework in creating this project, as well as how to use Express, Sequelize, and Handlebars in tandum to create a working project.
  
  I exclusively used my own CSS instead of using a CSS package such as Bootstrap or Tailwind for the sake of simplicity, especially after all of the new skills and time it took to make this project already.
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Deployed App](#deployed-app)
  - [License](#license)
  - [Notes for Future Develeopment](#notes-for-future-development)
  - [Questions](#questions)
  
  ## Installation
  
  N/A
  
  ## Usage
  
  - To sign up:
    - Press the "Log in" link in the nav bar
    - Click the "Sign up Instead" link below the log in card
    - Enter in a username, email, and password and press the "Sign up"
  - To log in:
    - Press the "Log In" link in the nav bar
    - Enter your Email and Password you used to make your account.
  - To Create a Post:
    - Go to the "Dashboard" section by clicking the "Dashboard" Link
    - Click the "Create Post" Link at the bottom of the dashboard
    - Fill out the "Title" and "Description fields of what you want your post to be.
    - Click the "Create" button to create your post.
  - To Update/Delete a Post:
    - Go to your "Dashboard" and click an existing post.
        - To update your posts, fill out your Title and Description Fields for whatever you want your post to be, and then click "Update"
        - To delete a post, click the "Delete" button below the Update Post card.
  - To Add a Comment:
    - From the Homepage, click the title of a post. This will direct you to the posts page where you can make comments.
    - Fill out the field in "Add Comment" with whatever you want your comment to be, and then click "Comment" to post it.

    Make account, make post, make comment, update comment, update post
  
  ## Deployed App

  https://haileyf-techblog-app.herokuapp.com/

  ## License
  This project is covered by the following license: 
  [MIT License](https://choosealicense.com/licenses/mit/)

  ## Notes for Future Development
  - Users:
    - Routes for deleting users exist but has not been implemented in the front-end
    - There is no framework for updating user information.
  - Comments:
    - Routes for deleting comments exist but has not been implemented in the front-end
    - There is no framework implemented as of now for updating comments like you can with posts
 - Seeds:
    - The comment seeds do not generate due to the seeds trying to run asynchronously from when the posts are created. This can likely be fixed with another seeds.js to run after the initial one to create users and posts, but running the seed.js file twice will also work fine. Doesn't necessarily matter for the project itself besides simulating the website in a local environment.
 - Mistakes in User Input:
    - Currently, if the user inputs an incorrect username or password it will return "Bad Reqest" in the alert window with no information about the error. However, the json messages for these errors exist within their related routes, it's just a matter of getting these messages to display. In the future, this will be fixed, but for the sake of getting an initial submission, I am submitting this assignment with this issue still present.
  
  ## Questions
  
  If you have any questions about this project, here's how to contact me:
  
  Github: https://github.com/hfrancis7
  Email: hfran7@yahoo.com
