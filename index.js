class Libro {
    constructor(titulo, autor, genero, idioma, precio, formato, isbn,descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso) {
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
        this.descuento = 0; //inicialmente sin descuento
    }
}

//pila

const pilaLibros = [];

function crearLibro() {
    const nuevoLibro = new libro (
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
    if(libroRemovido) {
        console.log("Libro removido:", libroRemovido);
    } else {
        console.log("No hay libros en la pila.");
    }
}
 function mostrarPila() {
    console.log("Pila actual de libros:", pilaLibros);
 }

 //menu

 function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar libro\n2. Quitar libro\n3. Mostrar pila de libros\n4. Listar libros\n5. Listar libros con descuento\n6. Libros caros y resumen\n7. Ordenar libros por páginas\n8. Resúmenes encadenados\n9. Salir");
        switch(opcion) {
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
                console.log("Saliendooo...");
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

//lista 

