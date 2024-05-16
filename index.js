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
}


