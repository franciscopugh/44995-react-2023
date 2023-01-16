export class Empleado {
    constructor(nombreParam, apellido, dni, sueldo) {
        this.nombre = nombreParam
        this.apellido = apellido
        this.dni = dni
        this.sueldo = sueldo
        this.proyectosAsignados = []
    }

    asignarProyecto (nuevoProyecto) {
        this.proyectosAsignados.push(nuevoProyecto)
    }
}

export class Proyecto {
    constructor(nombre, fechaInicio, fechaFin, costo, tipo) {
        this.nombre = nombre
        this.fechaInicio = fechaInicio
        this.fechaFin = fechaFin
        this.costo = costo
        this.tipo = tipo
    }
}

