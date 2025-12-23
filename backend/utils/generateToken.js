import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, 
        httpOnly: true, // Prevent XSS
        sameSite: "strict", // "strict" is fine if on same domain, "lax" is safer for dev
        secure: process.env.NODE_ENV !== "development", // Only true in HTTPS/Prod
    });
};

export default generateTokenAndSetCookie;