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

function listarLibrosPorEditorial(editorial) {
    const librosEditorial = pilaLibros.filter(libro => libro.editorial === editorial);
    console.log(`Libros de la editorial "${editorial}":`);
    console.table(librosEditorial);
}

function listarLibrosConDescuento() {
    const librosConDescuento = pilaLibros.map(libro => ({
        ...libro,
        descuento: (libro.precio * 0.20).toFixed(2)
    }));
    console.log("Libros con descuento:");
    console.table(librosConDescuento);
}

function menu() {
    while (true) {
       document.write("\nMenú:");
       document.write("1. Agregar libro a la pila (push)");
       document.write("2. Remover libro de la pila (pop)");
       document.write("3. Mostrar pila de libros");
       document.write("4. Listar libros por una editorial específica");
       document.write("5. Listar libros con descuento");
       document.write("6. Salir");
        const opcion = prompt("Seleccione una opción: ");

        if (opcion === "1") {
            // Capturar datos del libro y llamar a la función pushLibro
        } else if (opcion === "2") {
            popLibro();
        } else if (opcion === "3") {
            mostrarPila();
        } else if (opcion === "4") {
            const editorial = prompt("Ingrese el nombre de la editorial:");
            listarLibrosPorEditorial(editorial);
        } else if (opcion === "5") {
            listarLibrosConDescuento();
        } else if (opcion === "6") {
            console.log("Saliendo...");
            break;
        } else {
            console.log("Opción no válida, por favor intente de nuevo.");
        }
    }
}

menu();
