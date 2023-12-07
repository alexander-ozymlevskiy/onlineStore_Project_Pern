const Router = require("express");
const router = new Router();
const deviceRouter = require("./deviceRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typesRouter");
const useRouter = require("./useRouter");

router.use('/user', useRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router;
