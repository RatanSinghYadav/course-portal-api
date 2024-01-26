const { Router } = require('express');
const route = Router();
const verifyUser = require('../controllers/verifyUser.js');
const userSignup = require('./userRoutes/userAuth/signup.js');
const userLogin = require('./userRoutes/userAuth/login.js');
const fetchUser = require('../middlewares/fetchUserFromToken.js');
const { getUserData, updateUserShortDetail } = require('../routes/userRoutes/profile.js');
const { getAllCourses, getCourseDetails, enrollCourses } = require('./userRoutes/getAllCourses.js');
const {getEnrolledCourses, deleteEnrolledCourse} = require('./userRoutes/enrolledCourses.js');

//  verification route
route.post('/verifyuser', fetchUser, verifyUser);

// user routes
route.post('/api/v1/user/login', userLogin);
route.post('/api/v1/user/signup', userSignup);

route.patch('/api/v1/user/updateUserData', fetchUser, updateUserShortDetail);
route.get('/api/v1/user/getUserData', fetchUser, getUserData);
route.get('/api/v1/user/getcourses', getAllCourses);
route.get('/api/v1/user/getEnrolledCourses', fetchUser, getEnrolledCourses);
route.get('/api/v1/user/course/detail/:id', getCourseDetails);
route.get('/api/v1/user/course/delete/:id', fetchUser, deleteEnrolledCourse);
route.post('/api/v1/user/enroll/courses/:id', fetchUser, enrollCourses);



module.exports = route;