function fetchRepositories() {
	const username = document.getElementById('username').value;

	// Actualizar el título con el nombre de usuario
	const titleElement = document.querySelector('h1.mb-4');
	titleElement.innerHTML = `Lista de Repositorios GitHub - ${username}`;

	// Limpiar el DataTable
	$('#repositoriesTable').DataTable().clear().draw();

	// Hacer la solicitud a la API de GitHub para obtener la lista de repositorios
	$.ajax({
		url: `http://localhost:3000/repos/${username}`,
		method: 'GET',
		dataType: 'json',
		success: function (data) {
			if (data.length === 0) {
				// El usuario no tiene repositorios, mostrar mensaje con SweetAlert2
				Swal.fire({
					icon: 'info',
					title: 'Información',
					text: 'El usuario no tiene repositorios.',
					confirmButtonText: 'Aceptar',
				});
			} else {
				// Ordenar los repositorios por popularidad (número de estrellas) de manera descendente
				data.sort((a, b) => b.stargazers_count - a.stargazers_count);

				// Iterar sobre los repositorios y agregar filas a la tabla
				data.forEach(function (repo) {
					$('#repositoriesTable')
						.DataTable()
						.row.add([
							repo.name,
							repo.description || 'Sin descripción',
							repo.stargazers_count,
							`<a href="${repo.html_url}" target="_blank">Ver en GitHub</a>`,
						])
						.draw();
				});
			}
		},
		error: function (error) {
			// Mostrar mensaje de error con SweetAlert2
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Hubo un error, el usuario no tiene repositorios valide los datos.',
				confirmButtonText: 'Aceptar',
			});
		},
	});
}

// Llamar a fetchRepositories() al cargar la página para mostrar todos los repositorios
$(document).ready(function () {
	// Dejar el título inicial
	const titleElement = document.querySelector('h1.mb-4');
	titleElement.innerHTML = 'Lista de Repositorios GitHub';
});

//text: 'Hubo un error, el usuario no tiene repositorios valide los datos.',
