//! REGISTER AND LOGIN FORM (REQ)
/**
 * @swagger
 * components:
 *   schemas:
 *     SignInUp:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *          email:
 *              type: string
 *              description: User email
 *          password:
 *              type: string
 *              description: User password
 *       example:
 *         email: university@mail.ru
 *         password: qwerty1234
 */

//! REGISTER AND LOGIN FORM (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     ResToken:
 *       type: object
 *       required:
 *         - accessToken
 *         - refreshToken
 *       properties:
 *          accessToken:
 *              type: string
 *              description: Access Token
 *          refreshToken:
 *              type: string
 *              description: Refresh token
 *       example:
 *         accessToken: o0acs4x9aXc9rpbyzZBjDQ84GQnKwblb
 *         refreshToken: o0acs4x9aXc9rfghsw5yhghdQnKwblb
 */
