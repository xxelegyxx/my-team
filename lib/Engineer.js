const employee = require('./Employee')

class Engineer extends employee {
	constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getgitHub() {
      return this.gitHub;
    }

    getRole() {
		return 'Engineer'
	}
}

module.exports = Engineer;