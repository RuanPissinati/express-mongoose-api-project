const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');

const AuthController = require('../controllers/AuthController');

const router = Router();
router.route('/register').post(AuthController.register);

router.route('/login').post(AuthController.authenticate);
router.use(authMiddleware);
router.route('/islogged').get(AuthController.isLogged);

// router.route('/activate').post(AuthController.activate);

module.exports = router;

// const UsuarioController = require('../controllers/AuthController');
// const authMiddleware = require('../middlewares/auth');

// const { Router } = require('express');

// const AuthController = require('../controllers/AuthController');

// const router = Router();

// router.use(authMiddleware);
// router.route('/register').post(UsuarioController.create);

// module.exports = router;

// module.exports = (app) => {
//    app.post('/usuario', UsuarioController.post);
//    app.put('/usuario/:id', UsuarioController.put);
//    app.delete('/usuario/:id', UsuarioController.delete);
//    app.get('/usuarios', UsuarioController.get);
//    app.get('/usuario/:id', UsuarioController.getById);
//    app.post('/addtrustableparaminuser', UsuarioController.addIsTrustableParam);
// }