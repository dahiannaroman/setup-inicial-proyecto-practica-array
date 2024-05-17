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

    toString() {
        return `${this.titulo} por ${this.autor} (${this.isbn})`;
    }
}

class PilaDeLibros {
    constructor() {
        this.libros = [];
    }

    push(libro) {
        this.libros.push(libro);
        console.log("Libro agregado a la pila.");
    }

    pop() {
        if (this.libros.length === 0) {
            console.log("La pila está vacía. No hay libros para quitar.");
            return null;
        }
        const libroQuitado = this.libros.pop();
        console.log(`Se ha quitado el libro: ${libroQuitado.toString()}`);
        return libroQuitado;
    }

    mostrarPila() {
        if (this.libros.length === 0) {
            console.log("La pila está vacía.");
        } else {
            console.log("Libros en la pila:");
            this.libros.forEach((libro, index) => {
                console.log(`${index + 1}. ${libro.toString()}`);
            });
        }
    }
}


const libros = [
        new Libro("Cien años de soledad", "Gabriel García Márquez", "Ficción", "Español", 25.99, "Tapa dura", "9780060883287", "Una obra maestra sobre la familia Buendía.", "Nuevo", "Bogotá", "1967-05-30", "Sudamericana", 417, "13 x 2.8 x 20 cm", "450g"),
        new Libro("1984", "George Orwell", "Ciencia Ficción", "Inglés", 19.99, "Tapa blanda", "9780451524935", "Una visión distópica del futuro.", "Nuevo", "Nueva York", "1949-06-08", "Secker & Warburg", 328, "13 x 1.8 x 20 cm", "300g"),
        new Libro("To Kill a Mockingbird", "Harper Lee", "Ficción", "Inglés", 18.99, "Tapa blanda", "9780060935467", "Un libro clásico sobre la injusticia racial.", "Nuevo", "Alabama", "1960-07-11", "J.B. Lippincott & Co.", 281, "14 x 2.1 x 21 cm", "380g"),
        new Libro("El amor en los tiempos del cólera", "Gabriel García Márquez", "Ficción", "Español", 23.99, "Tapa dura", "9780307389732", "Una historia de amor épica.", "Nuevo", "Cartagena", "1985-12-17", "Oveja Negra", 368, "15 x 2.5 x 22 cm", "420g"),
        new Libro("Brave New World", "Aldous Huxley", "Ciencia Ficción", "Inglés", 15.99, "Tapa blanda", "9780060850524", "Una visión distópica del futuro.", "Nuevo", "Londres", "1932-08-18", "Chatto & Windus", 311, "13 x 1.8 x 20 cm", "290g"),
        new Libro("El Principito", "Antoine de Saint-Exupéry", "Ficción", "Francés", 12.99, "Tapa dura", "9780156012195", "Un libro infantil con lecciones profundas.", "Nuevo", "París", "1943-04-06", "Reynal & Hitchcock", 96, "12 x 1.2 x 19 cm", "200g"),
        new Libro("Matar a un ruiseñor", "Harper Lee", "Ficción", "Español", 14.99, "Tapa blanda", "9780060935467", "Un libro clásico sobre la injusticia racial.", "Nuevo", "Madrid", "1960-07-11", "J.B. Lippincott & Co.", 281, "14 x 2.1 x 21 cm", "380g"),
        new Libro("El Gran Gatsby", "F. Scott Fitzgerald", "Ficción", "Inglés", 15.99, "Tapa blanda", "9780743273565", "Una novela sobre la era del jazz en Estados Unidos.", "Nuevo", "Nueva York", "1925-04-10", "Charles Scribner's Sons", 180, "13 x 1.5 x 20 cm", "250g"),
        new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "Ficción", "Español", 22.99, "Tapa dura", "9788491051055", "Una de las obras más importantes de la literatura.", "Nuevo", "Madrid", "1605-01-16", "Francisco de Robles", 1072, "15 x 4.8 x 22 cm", "1500g"),
        new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", "Fantasía", "Español", 19.99, "Tapa dura", "9780747532743", "El primer libro de la saga de Harry Potter.", "Nuevo", "Londres", "1997-06-26", "Bloomsbury", 223, "13 x 2 x 20 cm", "350g"),
        new Libro("La Odisea", "Homero", "Épica", "Griego", 18.99, "Tapa blanda", "9780140268867", "Una epopeya clásica de la antigua Grecia.", "Nuevo", "Atenas", "-800", "Penguin Classics", 541, "14 x 2.5 x 22 cm", "500g"),
        new Libro("La Iliada", "Homero", "Épica", "Griego", 18.99, "Tapa blanda", "9780140447941", "La epopeya de la guerra de Troya.", "Nuevo", "Atenas", "-750", "Penguin Classics", 704, "14 x 2.5 x 22 cm", "550g"),
        new Libro("Orgullo y prejuicio", "Jane Austen", "Romance", "Inglés", 14.99, "Tapa blanda", "9780141439518", "Una novela sobre las costumbres y matrimonios en la Inglaterra del siglo XIX.", "Nuevo", "Londres", "1813-01-28", "T. Egerton", 279, "13 x 1.9 x 20 cm", "290g"),
        new Libro("El Hobbit", "J.R.R. Tolkien", "Fantasía", "Inglés", 15.99, "Tapa dura", "9780345339683", "Una aventura épica en la Tierra Media.", "Nuevo", "Londres", "1937-09-21", "George Allen & Unwin", 310, "14 x 2.3 x 21 cm", "350g"),
        new Libro("Cumbres Borrascosas", "Emily Brontë", "Romance", "Inglés", 12.99, "Tapa blanda", "9780141439785", "Una historia de amor y venganza en los páramos de Inglaterra.", "Nuevo", "Londres", "1847-12-17", "Thomas Cautley Newby", 342, "14 x 2.1 x 22 cm", "340g"),
        new Libro("Frankenstein", "Mary Shelley", "Horror", "Inglés", 10.99, "Tapa blanda", "9780141439471", "La historia de un científico que crea un monstruo.", "Nuevo", "Londres", "1818-01-01", "Lackington, Hughes, Harding, Mavor & Jones", 280, "13 x 1.7 x 20 cm", "270g"),
        new Libro("Drácula", "Bram Stoker", "Horror", "Inglés", 11.99, "Tapa blanda", "9780141439730", "La historia del famoso vampiro.", "Nuevo", "Londres", "1897-05-26", "Archibald Constable and Company", 418, "13 x 2.2 x 20 cm", "320g"),
        new Libro("Moby-Dick", "Herman Melville", "Aventura", "Inglés", 13.99, "Tapa blanda", "9780142437247", "La caza de la gran ballena blanca.", "Nuevo", "Nueva York", "1851-10-18", "Harper & Brothers", 720, "14 x 2.8 x 22 cm", "600g"),
        new Libro("Crimen y castigo", "Fiódor Dostoyevski", "Ficción", "Ruso", 17.99, "Tapa blanda", "9780143107637", "Un estudiante que comete un asesinato.", "Nuevo", "San Petersburgo", "1866-01-01", "The Russian Messenger", 671, "13 x 2.6 x 20 cm", "500g"),
        new Libro("Los hermanos Karamazov", "Fiódor Dostoyevski", "Ficción", "Ruso", 19.99, "Tapa blanda", "9780374528379", "La historia de la familia Karamazov.", "Nuevo", "San Petersburgo", "1880-01-01", "The Russian Messenger", 796, "14 x 3 x 22 cm", "700g"),
        new Libro("Guerra y paz", "León Tolstói", "Ficción", "Ruso", 24.99, "Tapa dura", "9780199232765", "Una narrativa épica sobre la guerra napoleónica.", "Nuevo", "San Petersburgo", "1869-01-01", "The Russian Messenger", 1225, "15 x 4.5 x 24 cm", "1200g"),

];


const pilaDeLibros = new PilaDeLibros();


libros.forEach(libro => pilaDeLibros.push(libro));


function mostrarMenu() {
    document.write("\n--- Menú de la Pila de Libros ---");
    document.write("1. Agregar un libro a la pila");
    document.write("2. Quitar un libro de la pila");
    document.write("3. Mostrar la pila actual de libros");
    document.write("4. Salir");

    const opcion = prompt("Seleccione una opción: ");
    switch (opcion) {
        case "1":
            agregarLibro();
            break;
        case "2":
            pilaDeLibros.pop();
            break;
        case "3":
            pilaDeLibros.mostrarPila();
            break;
        case "4":
            document.write("Saliendo del programa...");
            return;
        default:
            document.write("Opción no válida. Intente de nuevo.");
            break;
    }
    mostrarMenu();
}

function agregarLibro() {
    const titulo = prompt("Ingrese el título del libro: ");
    const autor = prompt("Ingrese el autor del libro: ");
    const genero = prompt("Ingrese el género del libro: ");
    const idioma = prompt("Ingrese el idioma del libro: ");
    const precio = parseFloat(prompt("Ingrese el precio del libro: "));
    const formato = prompt("Ingrese el formato del libro: ");
    const isbn = prompt("Ingrese el ISBN del libro: ");
    const descripcion = prompt("Ingrese una descripción del libro: ");
    const estado = prompt("Ingrese el estado del libro: ");
    const ubicacion = prompt("Ingrese la ubicación del libro: ");
    const fecha_publicacion = prompt("Ingrese la fecha de publicación del libro (AAAA-MM-DD): ");
    const editorial = prompt("Ingrese la editorial del libro: ");
    const paginas = parseInt(prompt("Ingrese el número de páginas del libro: "));
    const dimensiones = prompt("Ingrese las dimensiones del libro (ancho x profundidad x altura): ");
    const peso = parseFloat(prompt("Ingrese el peso del libro: "));

    const nuevoLibro = new Libro(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso);
    pilaDeLibros.push(nuevoLibro);
}




mostrarMenu();
