
const aulasContainer = document.getElementById("aulas-container");

async function cargarAulas() {
    try {
        const respuesta = await fetch("http://localhost:8000");

        if (!respuesta.ok) {
            throw new Error("Error al obtener las aulas");
        }

        const aulas = await respuesta.json();

        aulasContainer.innerHTML = "";

        aulas.forEach(aula => {
            const tarjeta = document.createElement("article");

            const nombre = document.createElement("h3");
            nombre.textContent = aula.nombre;

            const capacidad = document.createElement("p");
            capacidad.textContent = `Capacidad: ${aula.capacidad} personas`;

            tarjeta.appendChild(nombre);
            tarjeta.appendChild(capacidad);

            aulasContainer.appendChild(tarjeta);
        });

    } catch (error) {
        aulasContainer.textContent = "No se pudieron cargar las aulas.";
        console.error(error);
    }
}

cargarAulas();
