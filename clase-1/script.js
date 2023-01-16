import {Empleado, Proyecto} from './Clases.js'

//Si se exporta por defecto, va sin llaves
//Si exporto mas de uno, va con llaves

const proyecto1 = new Proyecto("Patitas suaves", "12/12/2022", "28/02/2023",30000, "Generacion de aplicacion movil")
const proyecto2 = new Proyecto("Verde esmeralda", "01/11/2022", "01/02/2023",20000, "Optimizacion de rendimiento")
const proyecto3 = new Proyecto("Garrita Feliz", "15/11/2022", "03/03/2023",40000, "Generacion de la BDD")
const proyecto4 = new Proyecto("El gato gordo", "03/10/2022", "20/01/2023",32000, "ABM de empleados")

const empleado1 = new Empleado("Francisco", "Pugh", 3213213, 12000)
const empleado2 = new Empleado("Andres", "Pata", 2411124, 11000)
const empleado3 = new Empleado("Diego", "Abad", 32131, 13000)
const empleado4 = new Empleado("Santiago", "Pizzi", 31231, 21000)

empleado1.asignarProyecto(proyecto1)
empleado2.asignarProyecto(proyecto1)
empleado2.asignarProyecto(proyecto2)
empleado3.asignarProyecto(proyecto3)
empleado4.asignarProyecto(proyecto3)
empleado4.asignarProyecto(proyecto4)

console.log(empleado1)
console.log(empleado2)
console.log(empleado3)
console.log(empleado4)