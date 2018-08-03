module.exports = (req, res, next) => {
  if (!req.session.user) {
    return next();
  }

  req.flash('error', 'Você já está logado');
  return res.redirect('/app/dashboard');
};
