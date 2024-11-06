import { Router } from "express";
import { checkAuth, logOutUser, loginUser, refreshAccessToken, registerUser, updateSocialLinks, updateUserDetails, updateUserPassword, deleteUser, userProfile} from "../controllers/user.controller.js";
import passport from 'passport';
import '../auth/passport.js'; 
import {verifyJWT} from '../middlewares/auth.middleware.js'
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

// User registration route
router.route('/register').post(registerUser)
router.route('/update-password').patch(verifyJWT, updateUserPassword)
router.route('/update-user').patch(verifyJWT, upload.fields([{name:'avatar', maxCount: 1}]) ,updateUserDetails)
router.route('/social-links').patch(verifyJWT, updateSocialLinks)

// User login route
router.route('/login').post(loginUser) 




// Google Authentication
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        res
            .status(200)
            .cookie('accessToken', accessToken, { httpOnly: true, secure: true })
            .cookie('refreshToken', refreshToken, { httpOnly: true, secure: true })
            .json({
                status: 200,
                message: 'Authenticated with Google successfully',
                data: { accessToken, refreshToken }
            });
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message });
    }
});




// Secure routes
router.route('/profile').get(verifyJWT,userProfile)
router.route('/delete').get(verifyJWT,deleteUser)
router.route('/logout').get(verifyJWT, logOutUser)
router.route('/check-auth').get(verifyJWT,checkAuth)
router.route('/refresh-token').post(refreshAccessToken)




// GitHub Authentication
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/github/callback', passport.authenticate('github', { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        res
            .status(200)
            .cookie('accessToken', accessToken, { httpOnly: true, secure: true })
            .cookie('refreshToken', refreshToken, { httpOnly: true, secure: true })
            .json({
                status: 200,
                message: 'Authenticated with GitHub successfully',
                data: { accessToken, refreshToken }
            });
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message });
    }
});

// Twitter Authentication
router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter', { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        res
            .status(200)
            .cookie('accessToken', accessToken, { httpOnly: true, secure: true })
            .cookie('refreshToken', refreshToken, { httpOnly: true, secure: true })
            .json({
                status: 200,
                message: 'Authenticated with Twitter successfully',
                data: { accessToken, refreshToken }
            });
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message });
    }
});
export default router