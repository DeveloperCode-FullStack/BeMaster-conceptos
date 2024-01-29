const githubService = require('../services/githubService');

class GithubController {
	async getRepos(req, res) {
		try {
			const { username } = req.params;
			const repositories = await githubService.getUserRepositories(username);
			res.json(repositories);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
}

module.exports = new GithubController();
