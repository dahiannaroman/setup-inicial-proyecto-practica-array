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

const pilaLibros = [];

// Definir 20 libros diferentes
const librosIniciales = [
    new Libro("Título1", "Autor1", "Ficción", "Español", 19.99, "Tapa dura", "1234567890123", "Descripción 1", "Nuevo", "Ubicación 1", "2022-01-01", "Editorial 1", 300, "15x2x20 cm", "500g"),
    new Libro("Título2", "Autor2", "No ficción", "Inglés", 15.99, "Tapa blanda", "1234567890124", "Descripción 2", "Usado", "Ubicación 2", "2021-05-15", "Editorial 2", 250, "14x1.5x21 cm", "400g"),
    // Añadir más libros aquí...
];

pilaLibros.push(...librosIniciales);

function pushLibro(libro) {
    pilaLibros.push(libro);
    console.log(`Libro "${libro.titulo}" agregado a la pila.`);
}

function popLibro() {
    const libro = pilaLibros.pop();
    if (libro) {
        console.log(`Libro "${libro.titulo}" removido de la pila.`);
        return libro;
    } else {
        console.log("La pila está vacía.");
        return null;
    }
}

function mostrarPila() {
    if (pilaLibros.length === 0) {
        console.log("La pila está vacía.");
    } else {
        console.log("Pila de libros:");
        pilaLibros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} por ${libro.autor}`);
        });
    }
}

const prompt = require('prompt-sync')();

function menu() {
    while (true) {
        console.log("\nMenú:");
        console.log("1. Agregar libro a la pila (push)");
        console.log("2. Remover libro de la pila (pop)");
        console.log("3. Mostrar pila de libros");
        console.log("4. Salir");
        const opcion = prompt("Seleccione una opción: ");

        if (opcion === "1") {
            const titulo = prompt("Título: ");
            const autor = prompt("Autor: ");
            const genero = prompt("Género: ");
            const idioma = prompt("Idioma: ");
            const precio = parseFloat(prompt("Precio: "));
            const formato = prompt("Formato: ");
            const isbn = prompt("ISBN: ");
            const descripcion = prompt("Descripción: ");
            const estado = prompt("Estado: ");
            const ubicacion = prompt("Ubicación: ");
            const fecha_publicacion = prompt("Fecha de publicación: ");
            const editorial = prompt("Editorial: ");
            const paginas = parseInt(prompt("Páginas: "));
            const dimensiones = prompt("Dimensiones: ");
            const peso = prompt("Peso: ");
            
            const libro = new Libro(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso);
            pushLibro(libro);

        } else if (opcion === "2") {
            popLibro();

        } else if (opcion === "3") {
            mostrarPila();

        } else if (opcion === "4") {
            console.log("Saliendo...");
            break;

        } else {
            console.log("Opción no válida, por favor intente de nuevo.");
        }
    }
}

menu();
