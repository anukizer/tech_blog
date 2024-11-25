const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login'); // Redirect to login page if user is not logged in
    } else {
      next(); // Allow access to the route
    }
  };
  
  module.exports = withAuth;
  