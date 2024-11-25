const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers'); // Import controllers
const sequelize = require('./config/connection'); // Import Sequelize connection
const helpers = require('./utils/helper'); // Import Handlebars helpers

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Set up session
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 10 * 60 * 1000, // Session expires in 10 minutes
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up Handlebars.js as the templating engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes from the controllers folder
app.use(routes);

// Start the server and sync Sequelize models to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
  });
});
