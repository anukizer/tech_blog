### Tech Blog

The project uses modern web development technologies, including Node.js, Express.js, Sequelize, PostgreSQL, and Handlebars.js for the templating engine. Authentication and session management are implemented with express-session and bcrypt for secure user interactions.

## Features
- View all blog posts on the homepage.
- User authentication:
- Sign up with a username and password.
- Log in securely.
- Logout functionality.
- Dashboard for logged-in users:
- View personal blog posts.
- Create new blog posts.
- Edit or delete existing posts.
- Individual blog post pages:
- View the full content of a post.
- Add comments on posts.
- View comments from other users.
- Session timeout for security:
- Users are logged out after being idle for a set period.

## Technologies Used
# Backend:

Node.js - Runtime environment.
Express.js - Web framework.
Sequelize - ORM for database interactions.
PostgreSQL - Database.

# Frontend:
Handlebars.js - Templating engine.
HTML5, CSS3, and JavaScript.

# Authentication:
bcrypt - Password hashing.
express-session - Session management.
connect-session-sequelize - Sequelize integration for session storage.

### Usage
# Homepage:
- View all existing blog posts.
- Access the login or signup pages if not logged in.

# Sign Up/Login:
- Create an account or log in with an existing one.

# Dashboard:
- View, create, edit, and delete your blog posts.

# View Posts:
- Click on a post to read its full content.
- Add comments if logged in.
