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

class pilaDeLibros {
    constructor() {
        this.pila = [];
    }

    push(libro) {
        this.pila.push(libro);
    }

    pop() {
        if (this.isEmpty()) {
            return "La pila está vacía";
        }else {
            return this.pila.pop();
        }
    }

    isEmpty() {
        return this.pila.length === 0;
    }

    peek() {
        return this.pila[this.pila.length - 1];
    }

    size() {
        return this.pila.length;
    }
}

let pilaLibros = new pilaDeLibros();

let libro1 = new Libro("El señor de los anillos", "J.R.R Tolkien", "Fantasía", 20.50, "Tapa dura", "978-84-450-7709-3", "La historia de un joven hobbit llamado Frodo Bolsón y su épica aventura para destruir in poderoso anillo.", "Nuevo", "Tienda A", "29 de julio de 1954", "Minotauro", 1200, "15cm x 22cm x 6cm", "1.5kg");
let libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico", "Español", 15.75, "Tapa blanda", "978-84-376-0494-7", "La historia de la familia Buendía en el pueblo ficticio de Macondo.", "Usado", "Tienda B", "30 de mayo de 1967", "Sudamericana", 432, "10cm x 15cm x 2cm", "300g");
let libro3 = new Libro("1984", "George Orwell", "Distopía", "Inglés", 18.99, "ebook", "978-0-452-28423-4", "La historia de Winston Smith en un mundo totalitario y vigilado constantemente.", "Como nuevo", "Tienda C", "8 de junio de 1949", "Secker & Warburg", 328, "Variable", "500g");

pilaLibros.push(libro1);
pilaLibros.push(libro2);
pilaLibros.push(libro3);

console.log("Tamaño de la pila:", pilaLibros.size());

let libroSacado = pilaLibros.pop();
console.log("Libro sacado de la pila:", libroSacado);

console.log("Tamaño de la pila despues de sacar un libro:", pilaLibros.size());

let libroEnCima = pilaLibros.peek();
console.log("Libro en la cima de la pila:", libroEnCima);