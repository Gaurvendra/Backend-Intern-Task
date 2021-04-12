const express = require("express");
const router = express.Router();
const { authCheck } = require("./authMiddleware");
const jwt = require("jsonwebtoken");
const { query, updatePush } = require("../db/query");

router.get("/details", authCheck, (req, res) => {
  let token = req.cookies.jwt;
  let obj = jwt.verify(token, process.env.JWT_SECRET);
  let q = { _id: obj._id };
  query(q).then((user) => {
    res.render("details", {
      name: user[0].name,
      email: user[0].email,
      phone: user[0].phone,
    });
  });
});

module.exports = router;
