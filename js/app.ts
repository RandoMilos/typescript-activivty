function calcularEdad(fechaNacimiento: string): number { //Function to calculate user's age 
    const hoy: Date = new Date();
    const nacimiento: Date = new Date(fechaNacimiento);

    let edad: number = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual: number = hoy.getMonth();
    const diaActual: number = hoy.getDate();

    const mesNacimiento: number = nacimiento.getMonth();
    const diaNacimiento: number = nacimiento.getDate();

    if ( //If to check if the user birthday month has passed
        mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
        edad--;
    }

    return edad;
}

const fecha = "2000-05-15";
console.log(`La edad es: ${calcularEdad(fecha)} años`);
