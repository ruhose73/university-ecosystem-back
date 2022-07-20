const GroupService = require("../services/groupServise");
const UserService = require("../services/userService");


class GroupController {
    //  http://localhost:5000/ecosystem/group/getAllGroups
    async getAllGroups(req, res, next) {
        try {
            const groups = await GroupService.getAllGroups();
            return res.json(groups);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/group/getGroupById/:id
    async getGroupById(req, res, next) {
        try {
            const groupId = req.params.id;
            const group = await GroupService.getGroupById(groupId);
            return res.json(group);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/group/createGroup
    async createGroup(req, res, next) {
        try {
            const {groupName, groupType} = req.body;
            const createGroup = await GroupService.createGroup(groupName, groupType);
            return res.json(createGroup);
        } catch (e) {
            next(e);
        }
    }

    //  http://localhost:5000/ecosystem/group/addUserToGroup
    async addUserToGroup(req, res, next) {
        try {
            const {groupId, userId} = req.body;
            const addUserToGroup = await UserService.addUserToGroup(groupId, userId);
            return res.json(addUserToGroup);
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new GroupController();
