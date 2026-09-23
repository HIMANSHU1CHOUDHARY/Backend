const express=require('express');
const router=express.Router();
const registerController=require('../controllers/registerController');
router.post('/register',registerController);
router.get("/me", async (req, res) => {

    const accessToken = req.headers.authorization?.split(" ")[ 1 ]

    if (!accessToken) {
        return res.status(401).json({
            message: "Unauthorized, access token not found",
        })
    }

    try {

        const decoded = verifyAccessToken(accessToken)

        const user = await userModel.findById(decoded.id)

        res.status(200).json({
            message: "user fetched successfully",
            data: {
                user: {
                    name: user.name,
                    email: user.email
                }
            }
        })

    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized, Invalid or expired access token",
        })
    }


})


/**
 * @POST /api/auth/refresh
 */
router.post("/refresh", async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.status(401).json({
            message: "Unauthorized, refresh token not found",
        })
    }

    try {

        const decoded =  verifyRefreshToken(refreshToken)

        const user = await userModel.findById(decoded.id)

        if (refreshToken !== user.refreshToken) {

            user.refreshToken = null
            await user.save()

            return res.status(401).json({
                message: "Unauthorized, refresh token mismatch",
            })
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens({ userId: user._id })

        res.cookie("refreshToken", newRefreshToken, { httpOnly: true })

        user.refreshToken = newRefreshToken
        await user.save()

        res.status(200).json({
            message: "Tokens refreshed successfully",
            accessToken
        })
    }
    catch (err) {
        return res.status(401).json({
            message: "Unauthorized, Invalid or expired refresh token",
        })
    }
})

module.exports=router;