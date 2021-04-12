authCheck = (req, res, next) => {
  if (req.cookies.jwt == undefined) {
    res.redirect("/login");
  } else {
    next();
  }
};
authCheckTrue = (req, res, next) => {
  if (req.cookies.jwt != undefined) {
    res.redirect("/details");
  } else {
    next();
  }
};

module.exports = { authCheck, authCheckTrue };
