
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You need to login first!');
        return res.redirect('/auth/login');
    }
    next();
}