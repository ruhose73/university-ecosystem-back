/**
 * @swagger
 * components:
 *   schemas:
 *     Group:
 *       type: object
 *       required:
 *         - group_name
 *         - group_type
 *       properties:
 *          id:
 *              type: integer
 *              description: The auto-generated id for group (autoIncrement)
 *          group_name:
 *              type: string
 *              description: Group name (example ИС-Б18)
 *          group_type:
 *              type: integer
 *              description: Group type (value 1-3) Бак/Маг/Асп
 */