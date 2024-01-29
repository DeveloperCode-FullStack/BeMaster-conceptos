const express = require('express');
const cors = require('cors');
const githubController = require('./controllers/githubController');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS
app.use(cors());

// Definir ruta para obtener repositorios
app.get('/repos/:username', githubController.getRepos);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
