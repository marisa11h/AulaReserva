const aulasContainer = document.getElementById("aulas-container");
const selectorAula = document.getElementById("aula");
const formulario = document.getElementById("form-reserva");
const mensaje = document.getElementById("mensaje");

async function cargarAulas() {
    try {
        const respuesta = await fetch("http://localhost:8000");

        if (!respuesta.ok) {
            throw new Error("Error al obtener las aulas");
        }

        const aulas = await respuesta.json();

        aulasContainer.innerHTML = "";
        selectorAula.innerHTML = '<option value="">Selecciona un aula</option>';

        aulas.forEach(aula => {
            // Mostrar aula en la interfaz
            const tarjeta = document.createElement("article");

            const nombre = document.createElement("h3");
            nombre.textContent = aula.nombre;

            const capacidad = document.createElement("p");
            capacidad.textContent = `Capacidad: ${aula.capacidad} personas`;

            tarjeta.appendChild(nombre);
            tarjeta.appendChild(capacidad);

            aulasContainer.appendChild(tarjeta);

            // Añadir aula al selector del formulario
            const opcion = document.createElement("option");
            opcion.value = aula.id;
            opcion.textContent = aula.nombre;

            selectorAula.appendChild(opcion);
        });

    } catch (error) {
        aulasContainer.textContent = "No se pudieron cargar las aulas.";
        console.error(error);
    }
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const aula = selectorAula.value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const responsable = document.getElementById("responsable").value.trim();

    if (!aula || !fecha || !hora || !responsable) {
        mensaje.textContent = "Todos los campos son obligatorios.";
        return;
    }

    mensaje.textContent = "Solicitud de reserva validada correctamente.";
    formulario.reset();
});

cargarAulas();

