const express = require('express');
const router = express.Router();
const getResults = require('../controllers/getResults');
const login = require('../controllers/loginController');
const register = require('../controllers/registerController');
const user = require('../controllers/userController');
const cookieJwtAuth = require('../middleware/cookieJwtAuth');

const validation = require('../validation');
const {loginValidation} = require('../validation/loginValidation')

router.post('/login', validation(loginValidation), user.login);
router.get('/results/:code',cookieJwtAuth.cookieJwtAuth, user.getResults);
router.post('/register', user.register);
router.get('/results',cookieJwtAuth.cookieJwtAuth, user.getSemestersWithResults);
router.get('/results/viwe/:semester',cookieJwtAuth.cookieJwtAuth, user.regCourseInSemester);
router.post('/logout',cookieJwtAuth.cookieJwtAuth, user.logout);
router.post('/updatePassword',cookieJwtAuth.cookieJwtAuth, user.updatePassword);
router.get('/',cookieJwtAuth.cookieJwtAuth, user.getUser);

module.exports = router;

