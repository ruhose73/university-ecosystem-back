//! HEADER
/**
 * @swagger
 * tags:
 *   name: Group Controller
 *   description: The controller is responsible groups
 */

//! REGISTER
/**
 * @swagger
 * /auth/register:
 *  post:
 *   summary: SIGN UP
 *   tags: [Auth Controller]
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: email
 *      schema:
 *      type: string
 *      required: true
 *      description: user email
 *      example: m.toropchinov@mail.ru
 *    - in: body
 *      name: password
 *      schema:
 *      type: string
 *      required: true
 *      description: user password
 *      example: admin1999
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/SignInUp'
 * 
 *   responses:
 *       200:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResToken'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Internal'
 */

//! LOGIN
/**
 * @swagger
 * /auth/login:
 *  post:
 *   summary: SIGN IN
 *   tags: [Auth Controller]
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: email
 *      schema:
 *      type: string
 *      required: true
 *      description: user email
 *      example: m.toropchinov@mail.ru
 *    - in: body
 *      name: password
 *      schema:
 *      type: string
 *      required: true
 *      description: user password
 *      example: admin1999
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/SignInUp'
 *   responses:
 *       200:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResToken'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Internal'
 */

//! ACTIVATE
/**
 * @swagger
 * /auth/activate/:link:
 *  get:
 *   summary: ACTIVATE USER
 *   tags: [Auth Controller]
 *   parameters:
 *    - in: path
 *      name: link
 *      schema:
 *      type: string
 *      description: id of the team
 *      example: /auth/activate/:g46dfhesgbf68634bndrfhdf8908bdfh79nd7fn
 *   responses:
 *       200:
 *         description: Page activated.html
 *       400:
 *         description: Page activationError.html
 *       500:
 *         description: Internal error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Internal'
 */