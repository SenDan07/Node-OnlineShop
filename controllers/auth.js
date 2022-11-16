exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get("Cookie");
  console.log(req.get("Cookie"));
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader("Set-Cookie", "loggedIn=true");
  res.cookie("loggedIn", true, {
    httpOnly: true,
  });
  res.redirect("/");
};
