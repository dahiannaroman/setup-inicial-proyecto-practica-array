class Libro {
    constructor(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.idioma = idioma;
        this.precio = precio;
        this.formato = formato;
        this.isbn = isbn;
        this.descripcion = descripcion;
        this.estado = estado;
        this.ubicacion = ubicacion;
        this.fecha_publicacion = fecha_publicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
    }
}

// Definición de la pila de libros
let pilaLibros = [];

// Función para agregar un libro a la pila
function agregarLibro(libro) {
    pilaLibros.push(libro);
    console.log(`El libro ${libroQuitado.titulo} ha sido quitado de la pila.`);


}

// Función para quitar un libro de la pila
function quitarLibro() {
    if (pilaLibros.length === 0) {
        console.log("La pila de libros está vacía.");
    } else {
        const libroQuitado = pilaLibros.pop();
        console.log(`El libro ${libro.titulo} ha sido agregado a la pila.`);

    }
}

// Función para mostrar la pila actual de libros
function mostrarPila() {
    if (pilaLibros.length === 0) {
        console.log("La pila de libros está vacía.");
    } else {
        console.log("Pila actual de libros:");
        pilaLibros.forEach(libro => {
            console.log(`El libro ${libroQuitado.titulo} ha sido quitado de la pila.`);

        });
    }
}

// Función para mostrar el menú y manejar la interacción del usuario
function mostrarMenu() {
    console.log("Bienvenido al gestor de libros:");
    console.log("1. Agregar un libro a la pila");
    console.log("2. Quitar un libro de la pila");
    console.log("3. Mostrar la pila actual de libros");
    console.log("4. Salir");

    const opcion = parseInt(prompt("Seleccione una opción:"));

    switch (opcion) {
        case 1:
            const titulo = prompt("Ingrese el título del libro:");
            const autor = prompt("Ingrese el autor del libro:");
            // Aquí continuarías solicitando los demás atributos del libro
            const nuevoLibro = new Libro(titulo, autor, /* otros atributos */);
            agregarLibro(nuevoLibro);
            break;
        case 2:
            quitarLibro();
            break;
        case 3:
            mostrarPila();
            break;
        case 4:
            console.log("Saliendo del programa...");
            return; // Salir del bucle
        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
    }

    mostrarMenu(); // Volver a mostrar el menú
}

// Iniciar la aplicación mostrando el menú
mostrarMenu();