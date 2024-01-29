const githubRepository = require('../repositories/githubRepository');

class GithubService {
	async getUserRepositories(username) {
		try {
			return await githubRepository.getRepositories(username);
		} catch (error) {
			throw error;
		}
	}
}

module.exports = new GithubService();
