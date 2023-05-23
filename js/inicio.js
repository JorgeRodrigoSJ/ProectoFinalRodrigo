const inicioFormulario = document.getElementById("inicio");

inicioFormulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const nombre = document.getElementById("nombre").value;
	fetch("./usuarios.json")
		.then((response) => response.json())
		.then((users) => {
			const user = users.find((user) => user.nombre === nombre);
			if (user) {
				location.href = "./index.html";
			} else {
				const mensajes = document.getElementById("mensajes");
				mensajes.textContent = "Nombre incorrecto.";
				setTimeout(() => {
					mensajes.textContent = "";
				}, 2000);
				console.log("invalid user");
			}
		});
});
