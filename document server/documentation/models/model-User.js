/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - group_id
 *         - role
 *       properties:
 *          id:
 *              type: integer
 *              description: The auto-generated id for user (autoIncrement)
 *          email:
 *              type: string
 *              description: User email
 *          password:
 *              type: string
 *              description: User password
 *          phone:
 *              type: string
 *              description: User phone number
 *          first_name:
 *              type: string
 *              description: User firstname
 *          middle_name:
 *              type: string
 *              description: User middlename
 *          last_name:
 *              type: string
 *              description: User lastname
 *          group_id:
 *              type: integer
 *              description: User groupId, ref to Groups table (to id)
 *          role:
 *              type: integer
 *              description: User role, values from 1 to 5 (default 0)
 *          activationLink:
 *              type: string
 *              description: Activation link for user, cannot use twice
 *          isActivated:
 *              type: boolean
 *              description: Activation user status
 */
