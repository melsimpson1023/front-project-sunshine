## front-project-sunshine

## Application

This is my capstone project, a blog site that also offers links to youtube videos and links to articles. The application has been broken into two parts `front-project-sunshine` and `back-project-sunshine`. The `front-project-sunshine` was designed to communitcate with `back-project-sunshine` API, so that a user can go through the process creating, deleteing, updating, and showing blogs.

## Technologies Used

- HTML
- CSS
- React
- React-Bootstrap
- Javascript

## Installation

    Download this template.
    Unzip and rename the template directory (unzip ~/Downloads/react-auth-template-master.zip).
    Move into the new project and git init.
    Empty README.md and fill with your own content.
    Replace react-auth-template in package.json with your projects name.
    Replace the "homepage" field in package.json with your (public) Github account name and repository name.
    Install dependencies with npm install.
    git add and git commit your changes.
    Run the development server with npm start.

    ## ERD
    User -|< Blog

    ## User Stories

    1. I want my user to be able to sign-up.
    2. I want my user to sign-in.
    3. I want my signed-in user to be able to change password.
    4. I want my signed-in user to be able to sign-out.
    5. I want my signed-in user to be able to see all blog posts.
    6. I want my signed-in user to be able to create, update, delete, and show only their blog post.
    7. I want my signed-in user to be able to view the videos.
    8. I want my signed-in user to be able to view the articles.
    9. I want my signed-in user to be able to logout.

    ## Catalog of routes

    | Verb   | URI Pattern            | Controller#Action |
    |--------|------------------------|-------------------|
    | POST   | `/sign-up/`             | `users#signup`    |
    | POST   | `/sign-in/`             | `users#signin`    |
    | PATCH  | `/change-pw/`        | `users#changepw`  |
    | DELETE | `/sign-out/`        | `users#signout`   |
    | GET    | `/blogs/`            | `blogs#index`     |
    | GET    | `/blogs/:id`        | `blogs#show`      |
    | POST   | `/blogs/`            | `blogs#create`    |
    | PATCH  | `/blogs/:id/`        |  `blogs#update`   |
    | DELETE | `/blogs/:id/`        | `blogs#delete`    |



    ## Planning and Problem Solving

    From using my past knowledge from what I have learned through the course and experience with the past projects, I used miro.com for my wireframe.

    Miro Link: https://miro.com/app/board/o9J_lavWWgg=/
