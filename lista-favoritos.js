document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#formulario');
    const entrada = document.querySelector('#entrada');
    const lista = document.querySelector('#lista');

    let datos = cargar();

    mostrar();

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const texto = entrada.value.trim();
        if (texto === '') return;

        datos.push(texto);
        guardar();
        mostrar();
        form.reset();
    });

    lista.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar')) {
            const i = e.target.dataset.index;
            datos.splice(i, 1);
            guardar();
            mostrar();
        }
    });

    function cargar() {
        return JSON.parse(localStorage.getItem('favoritos')) || [];
    }

    function guardar() {
        localStorage.setItem('favoritos', JSON.stringify(datos));
    }

    function mostrar() {
        lista.innerHTML = '';
        datos.forEach((item, i) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item}
                <button class="eliminar" data-index="${i}">Eliminar</button>
            `;
            lista.appendChild(li);
        });
    }
});
