class Libro {
    constructor(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fechaPublicacion, editorial, paginas, dimensiones, peso) {
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
        this.fechaPublicacion = fechaPublicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
    }
}

// Pila
let pilaLibros = [
    new Libro('El Quijote', 'Miguel de Cervantes', 'Ficción', 'Español', 40, 'Tapa dura', '978-3-16-148410-0', 'Una novela clásica', 'Nuevo', 'Madrid', '1605-01-01', 'Editorial A', 1023, '15x5x21', '1kg'),
    new Libro('1984', 'George Orwell', 'Ciencia Ficción', 'Inglés', 25, 'Tapa blanda', '978-0-452-28423-4', 'Distopía futurista', 'Usado', 'Londres', '1949-06-08', 'Editorial B', 328, '13x3x20', '0.5kg'),
    new Libro('Brave New World', 'Aldous Huxley', 'Ciencia Ficción', 'Inglés', 30, 'Tapa blanda', '978-0-06-085052-4', 'Futuro distópico', 'Usado', 'Nueva York', '1932-01-01', 'Editorial C', 288, '13x2x20', '0.4kg'),
    new Libro('Fahrenheit 451', 'Ray Bradbury', 'Ciencia Ficción', 'Inglés', 22, 'Tapa dura', '978-1-4516-7331-9', 'Sociedad anti-libros', 'Nuevo', 'Chicago', '1953-10-19', 'Editorial D', 158, '14x1x21', '0.3kg'),
    new Libro('Cien años de soledad', 'Gabriel García Márquez', 'Ficción', 'Español', 35, 'Tapa blanda', '978-0-06-088328-7', 'Saga familiar mágica', 'Usado', 'Bogotá', '1967-05-30', 'Editorial A', 417, '14x3x21', '0.6kg'),
    new Libro('Matar a un ruiseñor', 'Harper Lee', 'Ficción', 'Inglés', 28, 'Tapa blanda', '978-0-06-093546-7', 'Racismo en el sur', 'Nuevo', 'Alabama', '1960-07-11', 'Editorial B', 281, '13x2x20', '0.5kg'),
    new Libro('Orgullo y prejuicio', 'Jane Austen', 'Romántico', 'Inglés', 24, 'Tapa dura', '978-0-19-280238-5', 'Relaciones y sociedad', 'Nuevo', 'Londres', '1813-01-28', 'Editorial C', 279, '12x2x18', '0.4kg'),
    new Libro('El gran Gatsby', 'F. Scott Fitzgerald', 'Ficción', 'Inglés', 18, 'Tapa blanda', '978-0-7432-7356-5', 'Sueño americano fallido', 'Usado', 'Nueva York', '1925-04-10', 'Editorial D', 180, '12x1x20', '0.3kg'),
    new Libro('Crimen y castigo', 'Fyodor Dostoevsky', 'Ficción', 'Ruso', 27, 'Tapa dura', '978-0-14-044913-6', 'Psicología del crimen', 'Nuevo', 'San Petersburgo', '1866-01-01', 'Editorial A', 671, '15x4x23', '0.8kg'),
    new Libro('Donde los árboles cantan', 'Laura Gallego', 'Fantástico', 'Español', 32, 'Tapa blanda', '978-84-675-5004-6', 'Aventura épica', 'Usado', 'Barcelona', '2011-10-14', 'Editorial B', 477, '14x3x21', '0.7kg'),
    new Libro('El nombre del viento', 'Patrick Rothfuss', 'Fantástico', 'Inglés', 29, 'Tapa dura', '978-0-7564-0477-0', 'Historia de un héroe', 'Nuevo', 'Wisconsin', '2007-03-27', 'Editorial C', 662, '15x4x22', '0.9kg'),
    new Libro('Los juegos del hambre', 'Suzanne Collins', 'Ciencia Ficción', 'Inglés', 26, 'Tapa blanda', '978-0-439-02352-8', 'Distopía juvenil', 'Usado', 'Nueva York', '2008-09-14', 'Editorial D', 374, '13x2x20', '0.5kg'),
    new Libro('La sombra del viento', 'Carlos Ruiz Zafón', 'Misterio', 'Español', 35, 'Tapa blanda', '978-0-14-303490-1', 'Novela gótica', 'Nuevo', 'Barcelona', '2001-04-01', 'Editorial A', 565, '14x3x21', '0.7kg'),
    new Libro('Juego de tronos', 'George R. R. Martin', 'Fantástico', 'Inglés', 45, 'Tapa dura', '978-0-553-89785-2', 'Saga épica', 'Nuevo', 'Santa Fe', '1996-08-06', 'Editorial B', 835, '16x5x24', '1.2kg'),
    new Libro('El señor de los anillos', 'J. R. R. Tolkien', 'Fantástico', 'Inglés', 50, 'Tapa blanda', '978-0-618-00222-8', 'Aventura épica', 'Usado', 'Oxford', '1954-07-29', 'Editorial C', 1216, '14x6x22', '1.5kg'),
    new Libro('Harry Potter y la piedra filosofal', 'J. K. Rowling', 'Fantástico', 'Inglés', 20, 'Tapa dura', '978-0-590-35340-3', 'Aventura mágica', 'Nuevo', 'Londres', '1997-06-26', 'Editorial D', 223, '12x2x19', '0.4kg'),
    new Libro('La odisea', 'Homero', 'Clásico', 'Griego', 15, 'Tapa blanda', '978-0-14-026886-7', 'Aventura épica', 'Usado', 'Atenas', '800 a.C.', 'Editorial A', 541, '13x2x20', '0.6kg'),
    new Libro('El extranjero', 'Albert Camus', 'Filosofía', 'Francés', 23, 'Tapa dura', '978-0-679-72020-1', 'Existencialismo', 'Nuevo', 'París', '1942-06-14', 'Editorial B', 123, '12x1x18', '0.3kg'),
    new Libro('El retrato de Dorian Gray', 'Oscar Wilde', 'Ficción', 'Inglés', 28, 'Tapa blanda', '978-0-14-143957-0', 'Moralidad y corrupción', 'Usado', 'Londres', '1890-07-20', 'Editorial C', 254, '13x2x19', '0.4kg'),
    new Libro('Los miserables', 'Victor Hugo', 'Ficción', 'Francés', 45, 'Tapa dura', '978-0-14-044430-8', 'Injusticia social', 'Nuevo', 'París', '1862-04-03', 'Editorial D', 1463, '16x6x25', '1.8kg'),
];

function agregarLibro(libro) {
    pilaLibros.push(libro);
    console.log("Libro agregado:");
    console.table([libro]);
}

function quitarLibro() {
    const libroRemovido = pilaLibros.pop();
    if (libroRemovido) {
        console.log("Libro removido:");
        console.table([libroRemovido]);
    } else {
        console.log("No hay libros en la pila.");
    }
}

function mostrarPila() {
    console.log("Pila actual de libros:");
    console.table(pilaLibros);
}

function listarLibros() {
    console.log("Lista de libros:");
    console.table(pilaLibros);
}

function listarLibrosConDescuento() {
    const librosConDescuento = pilaLibros.map(libro => ({
        ...libro,
        descuento: libro.precio * 0.2
    }));
    console.log("Libros con descuento:");
    console.table(librosConDescuento);
}

function librosCarosYResumen(){
    const librosCarosYResumen = pilaLibros.filter(libro => libro.precio > 20).sort((a, b) => b.precio - a.precio).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        precio: libro.precio
    }));
    console.log("Libros caros ordenados de mayor a menor:");
    console.table(librosCarosYResumen);
}

function ordenarLibrosPorPaginas() {
    const librosOrdenados = [...pilaLibros].sort((a, b) => b.paginas - a.paginas);
    console.log("Libros ordenados por páginas de mayor a menor:");
    console.table(librosOrdenados);
}

function resumenesEncadenados() {
    const librosCarosPorTitulo = pilaLibros.filter(libro => libro.precio > 11).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        precio: libro.precio
    }));
    console.log("Libros caros por título:");
    console.table(librosCarosPorTitulo);

    const librosMenosDe100Paginas = pilaLibros.filter(libro => libro.paginas < 100).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        paginas: libro.paginas
    }));
    console.log("Libros con menos de 100 páginas:");
    console.table(librosMenosDe100Paginas);

    const librosCarosOrdenados = pilaLibros.filter(libro => libro.precio > 20).sort((a, b) => b.precio - a.precio).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        precio: libro.precio
    }));
    console.log("Libros caros ordenados de mayor a menor:");
    console.table(librosCarosOrdenados);

    const librosPorPaginas = pilaLibros.sort((a, b) => b.paginas - a.paginas).map(libro => ({
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        paginas: libro.paginas
    }));
    console.log("Libros por número más alto de páginas ordenados de mayor a menor:");
    console.table(librosPorPaginas);
}

// Funciones de búsqueda utilizando find()
function buscarLibroPorTitulo(titulo) {
    const libroEncontrado = pilaLibros.find(libro => libro.titulo === titulo);
    if (libroEncontrado) {
        console.log("Libro encontrado por título:");
        console.table([libroEncontrado]);
    } else {
        console.log("Libro no encontrado.");
    }
}

function buscarLibroPorAutor(autor) {
    const libroEncontrado = pilaLibros.find(libro => libro.autor === autor);
    if (libroEncontrado) {
        console.log("Libro encontrado por autor:");
        console.table([libroEncontrado]);
    } else {
        console.log("Libro no encontrado.");
    }
}

function buscarLibroPorFechaPublicacion(fecha) {
    const libroEncontrado = pilaLibros.find(libro => libro.fechaPublicacion === fecha);
    if (libroEncontrado) {
        console.log("Libro encontrado por fecha de publicación:");
        console.table([libroEncontrado]);
    } else {
        console.log("Libro no encontrado.");
    }
}

function buscarLibroPorGenero(genero) {
    const libroEncontrado = pilaLibros.find(libro => libro.genero === genero);
    if (libroEncontrado) {
        console.log("Libro encontrado por género:");
        console.table([libroEncontrado]);
    } else {
        console.log("Libro no encontrado.");
    }
}

function buscarLibroPorIdioma(idioma) {
    const libroEncontrado = pilaLibros.find(libro => libro.idioma === idioma);
    if (libroEncontrado) {
        console.log("Libro encontrado por idioma:");
        console.table([libroEncontrado]);
    } else {
        console.log("Libro no encontrado.");
    }
}

// Función para realizar 10 iteraciones de búsqueda
function iteracionesDeBusqueda() {
    const titulos = [
        'El Quijote', '1984', 'Brave New World', 'Fahrenheit 451', 'Cien años de soledad',
        'Matar a un ruiseñor', 'Orgullo y prejuicio', 'El gran Gatsby', 'Crimen y castigo', 'Donde los árboles cantan'
    ];

    for (let i = 0; i < titulos.length; i++) {
        buscarLibroPorTitulo(titulos[i]);
    }
}

// Menú
function menu() {
    let opcion;
    do {
        opcion = prompt(`Seleccione una opción:
        1. Agregar libro
        2. Quitar libro
        3. Mostrar pila de libros
        4. Listar libros
        5. Listar libros con descuento
        6. Libros caros y resumen
        7. Ordenar libros por páginas
        8. Resúmenes encadenados
        9. Buscar libro por título
        10. Buscar libro por autor
        11. Buscar libro por fecha de publicación
        12. Buscar libro por género
        13. Buscar libro por idioma
        14. Iteraciones de búsqueda
        15. Salir`);
        
        switch (opcion) {
            case '1':
                agregarLibro();
                break;
            case '2':
                quitarLibro();
                break;
            case '3':
                mostrarPila();
                break;
            case '4':
                listarLibros();
                break;
            case '5':
                listarLibrosConDescuento();
                break;
            case '6':
                librosCarosYResumen();
                break;
            case '7':
                ordenarLibrosPorPaginas();
                break;
            case '8':
                resumenesEncadenados();
                break;
            case '9':
                const titulo = prompt("Ingrese el título del libro:");
                buscarLibroPorTitulo(titulo);
                break;
            case '10':
                const autor = prompt("Ingrese el autor del libro:");
                buscarLibroPorAutor(autor);
                break;
            case '11':
                const fecha = prompt("Ingrese la fecha de publicación del libro (YYYY-MM-DD):");
                buscarLibroPorFechaPublicacion(fecha);
                break;
            case '12':
                const genero = prompt("Ingrese el género del libro:");
                buscarLibroPorGenero(genero);
                break;
            case '13':
                const idioma = prompt("Ingrese el idioma del libro:");
                buscarLibroPorIdioma(idioma);
                break;
            case '14':
                iteracionesDeBusqueda();
                break;
            case '15':
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción no válida");
        }
    } while (opcion !== '15');
}

// Ejecutar el menú
menu();




