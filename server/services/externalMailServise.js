const request = require('request')

class ExternalMaterialService {

    async createCourse(user, link, subtitle) {
      const url = 'http://localhost:6000/ecosystem-mail/course/newCourse'
      request({
      url : url,
      method :"POST",
      headers : {
        "content-type": "application/json",
      },
      body: {
        user: user, 
        link:link, 
        subtitle: subtitle
      },
      json: true
    })
    }

    async newMaterialCourse(user, link, subtitle) {
      const url = 'http://localhost:6000/ecosystem-mail/course/newMaterial'
      request({
      url : url,
      method :"POST",
      headers : {
        "content-type": "application/json",
      },
      body: {
        user: user, 
        link:link, 
        subtitle: subtitle
      },
      json: true
    })
    }

    async newTaskCourse(user, link, subtitle) {
      const url = 'http://localhost:6000/ecosystem-mail/course/newTask'
      request({
      url : url,
      method :"POST",
      headers : {
        "content-type": "application/json",
      },
      body: {
        user: user, 
        link:link, 
        subtitle: subtitle
      },
      json: true
    })
    }

    async newTaskCourse(user, link, subtitle) {
      const url = 'http://localhost:6000/ecosystem-mail/course/taskGrade'
      request({
      url : url,
      method :"POST",
      headers : {
        "content-type": "application/json",
      },
      body: {
        user: user, 
        link:link, 
        subtitle: subtitle
      },
      json: true
    })
    }
}

module.exports = new ExternalMaterialService();
