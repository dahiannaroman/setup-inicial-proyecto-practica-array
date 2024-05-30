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
        this.descuento = 0; // Inicialmente sin descuento
    }
}

// Pila
const pilaLibros = [];

function crearLibro() {
    const nuevoLibro = new Libro(
        "Titulo ejemplo",
        "Autor ejemplo",
        "Ficción",
        "Español",
        15,
        "Tapa blanda",
        "1234567890",
        "Descripción del libro",
        "Nuevo",
        "Ubicación ejemplo",
        "2024-01-01",
        "Editorial ejemplo",
        300,
        "15 x 2 x 22 cm",
        "500 gramos" 
    );
    pilaLibros.push(nuevoLibro);
}

function agregarLibro(libro) {
    pilaLibros.push(libro);
    console.log("Libro agregado:", libro);
}

function quitarLibro() {
    const libroRemovido = pilaLibros.pop();
    if (libroRemovido) {
        console.log("Libro removido:", libroRemovido);
    } else {
        console.log("No hay libros en la pila.");
    }
}

function mostrarPila() {
    console.log("Pila actual de libros:", pilaLibros);
}

// Función para listar los libros
function listarLibros() {
    pilaLibros.forEach(libro => {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Editorial: ${libro.editorial}, Precio: ${libro.precio}`);
    });
}

// Función para listar libros con descuento
function listarLibrosConDescuento() {
    pilaLibros.filter(libro => libro.descuento > 0).forEach(libro => {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Precio con descuento: ${libro.precio - libro.descuento}`);
    });
}

// Función para listar libros caros y un resumen
function librosCarosYResumen() {
    const librosCaros = pilaLibros.filter(libro => libro.precio > 20);
    librosCaros.forEach(libro => {
        console.log(`Título: ${libro.titulo}, Precio: ${libro.precio}`);
    });
    console.log(`Total de libros caros: ${librosCaros.length}`);
}

// Función para ordenar libros por número de páginas
function ordenarLibrosPorPaginas() {
    const librosOrdenados = [...pilaLibros].sort((a, b) => a.paginas - b.paginas);
    librosOrdenados.forEach(libro => {
        console.log(`Título: ${libro.titulo}, Páginas: ${libro.paginas}`);
    });
}

// Función para resúmenes encadenados
function resumenesEncadenados() {
    const resúmenes = pilaLibros.map(libro => `Título: ${libro.titulo}, Páginas: ${libro.paginas}`).join(' | ');
    console.log(resúmenes);
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
        9. Salir`);
        
        switch (opcion) {
            case '1':
                crearLibro();
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
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción no válida");
        }
    } while (opcion !== '9');
}

// Inicialización de 20 libros diferentes (ejemplo)
for (let i = 1; i <= 20; i++) {
    agregarLibro(new Libro(`Título ${i}`, `Autor ${i}`, `Género ${i}`, `Idioma ${i}`, i * 5, `Formato ${i}`, `ISBN${i}`, `Descripción ${i}`, `Estado ${i}`, `Ubicación ${i}`, `2024-01-01`, `Editorial ${i}`, i * 10, `${i * 2} x ${i * 3} x ${i * 4} cm`, `${i * 100} gramos`));
}

menu();

// Modificar el array para incluir 5 libros de una editorial específica
const librosPorEditorial = pilaLibros.filter(libro => libro.editorial === "Editorial 1").slice(0, 5);

// Usar el método .map para listar los libros por Título, Autor, Editorial y Precio
const listaLibrosMap = librosPorEditorial.map(libro => ({
    Titulo: libro.titulo,
    Autor: libro.autor,
    Editorial: libro.editorial,
    Precio: libro.precio
}));
console.log("Libros de Editorial 1:");
console.log(listaLibrosMap);

// Crear 10 iteraciones diferentes manteniendo el atributo Titulo
for (let i = 0; i < 10; i++) {
    let libro = new Libro(`Título${i+1}`, `Autor${i+1}`, "Ficción", "Español", 15.99 + i, "Tapa blanda", `123456789${i}`, `Descripción${i+1}`, "Nuevo", "Ubicación1", `2020-01-0${i+1}`, "Editorial 1", 300 + i, "15x20x2", "0.5kg");
    console.log(`Libro iteración ${i+1}: ${libro.titulo}`);
}
