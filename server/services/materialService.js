const ApiStatus = require("../handlers/apiStatus");
const Material = require("../models/Material");
const UserMaterials = require("../models/UserMaterials");


class MaterialService {
    async getMaterialById(materialId) {
        try {
            const material = await Material.findByPk(materialId);
            if(material) {
                return {material};
            } else {
                throw ApiStatus.badRequest("Материал не найден");
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async createMaterialInCourse(
        materialName,
        materialDescription,
        courseId,
        groupId
    ) {
        try {
            const createMaterialInCourse = await Material.create({
                material_name:materialName,
                material_description:materialDescription,
                CourseId:courseId,
                GroupId:groupId,
            });
            if(!createMaterialInCourse) {
                throw ApiStatus.internal("Материал не создан");
            }
            return createMaterialInCourse;
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async getAllMaterialsIdFromUsers(courseId, userId) {
        try {
            const getAllMaterialsIdFromUsers = await UserMaterials.findAll({
                where:{
                    CourseId:courseId,
                    UserId:userId,
                },
            });
            if(!getAllMaterialsIdFromUsers) {
                throw ApiStatus.internal("Материалов нет");
            }
            return getAllMaterialsIdFromUsers;
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }

    async addMaterialToUsers(userId, materialId, groupId, courseId) {
        try {
            const addMaterialToUsers = await UserMaterials.create({
                GroupId:groupId,
                CourseId:courseId,
                UserId:userId,
                MaterialId:materialId,
            });
            if(!addMaterialToUsers) {
                throw ApiStatus.internal("Материал не создан");
            }
            return addMaterialToUsers;
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}

module.exports = new MaterialService();
