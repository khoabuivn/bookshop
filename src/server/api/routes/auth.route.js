var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/auth.controller");
const ProductController = require("../controllers/product.controller");
const authMiddleware = require("../../middlewares/auth.middleware");
/*
 * Init all APIs on your application
 * @param {*} app from express
 */
router.post("/login", AuthController.postLogin);
router.post("/refresh-token", AuthController.refreshToken);
// Sử dụng authMiddleware.isAuth trước những api cần xác thực
router.use(authMiddleware);
// List Protect APIs:
router.get("/api/products", ProductController.get);
// router.get("/example-protect-api", ExampleController.someAction);

module.exports = router;
