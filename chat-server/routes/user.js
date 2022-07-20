const UserController = require("../controllers/userController");
const Router = require("express")
const router = new Router();
  
router.get("/allusers/:id", UserController.getAllUsers);

router.get("/refresh", UserController.refresh);
  
module.exports = router;