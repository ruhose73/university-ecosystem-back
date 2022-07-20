const MaterialService = require("../services/materialService");


class MaterialController {
    //  http://localhost:5000/ecosystem/material/getMaterialById/:id
    async getMaterialById(req, res, next) {
        try {
            const materialId = req.params.id;
            const material = await MaterialService.getMaterialById(materialId);
            return res.json(material);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/material/getAllMaterialsFromUsers?courseId=1&userId=1

    async getAllMaterialsFromUsers(req, res, next) {
        try {
            const courseId = req.query.courseId;
            const userId = req.query.userId;
            const materials = await MaterialService.getAllMaterialsIdFromUsers(
                courseId,
                userId
            );
            for(let i = 0; i < materials.length; i++) {
                const foundedMaterials = await MaterialService.getMaterialById(
                    materials[i].MaterialId
                );
                materials[i].dataValues.material = foundedMaterials;
            }
            return res.json({materials});
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new MaterialController();
