/**
 * @swagger
 * components:
 *   schemas:
 *     Token:
 *       type: object
 *       required:
 *         - user_id
 *         - refreshToken
 *       properties:
 *          id:
 *              type: integer
 *              description: The auto-generated id for token (autoIncrement)
 *          user_id:
 *              type: integer
 *              description: User's id (ref to schema User, key id)
 *          refreshToken:
 *              type: string
 *              description: User's refresh token (generate in tokenService)
 */
