const API_URL = "http://localhost:4000";

document
	.getElementById("multerForm")
	.addEventListener("submit", async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
    
		fetch(`${API_URL}/api/v1/upload`, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				// Aquí puedes manejar la respuesta
			})
			.catch((error) => {
				// Aquí puedes manejar los errores
			});
	});
