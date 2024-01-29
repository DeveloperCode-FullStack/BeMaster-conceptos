const axios = require('axios');

class GithubRepository {
	async getRepositories(username) {
		try {
			const response = await axios.get(`https://api.github.com/users/${username}/repos`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = new GithubRepository();
