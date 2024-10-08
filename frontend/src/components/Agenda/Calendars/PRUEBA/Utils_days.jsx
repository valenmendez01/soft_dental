// Importa la biblioteca dayjs para manejar fechas de manera sencilla y eficiente.
import dayjs from "dayjs";

// RESUMEN: La función getMonth genera una matriz 2D (daysMatrix) que representa un mes de un calendario. Cada submatriz representa una semana y cada elemento en la submatriz es un objeto dayjs que representa un día, empezando por los días del mes anterior que caen en la primera semana del mes, seguido por todos los días del mes especificado y posiblemente algunos días del mes siguiente para completar la última semana.

// Define y exporta una función llamada getMonth que toma un argumento opcional month. Si month no se proporciona, se utiliza el mes actual (dayjs().month()).
export function getMonth(month = dayjs().month()) {
  // Asegura que el valor de month sea un entero. La función Math.floor() redondea hacia abajo al número entero más cercano.
  month = Math.floor(month);
  // Obtiene el año actual usando dayjs().year() y lo almacena en la variable year
  const year = dayjs().year();
  // Crea una fecha para el primer día del mes especificado y obtiene el día de la semana para esa fecha (0 para domingo, 1 para lunes, etc.). Este valor se almacena en firstDayOfTheMonth.
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  // Inicializa currentMonthCount para comenzar en un número negativo igual al valor de firstDayOfTheMonth, esto se usa para calcular los días del mes anterior que deben mostrarse en el calendario.
  let currentMonthCount = 0 - firstDayOfTheMonth;

  // Crea una matriz de 5 elementos (representando 5 semanas) y la llena con matrices vacías. Luego usa map para iterar sobre estas matrices.
  const daysMatrix = new Array(5).fill([]).map(() => { // SEMANAS EN UN MES
    // Dentro del map anterior, crea una nueva matriz de 7 elementos (representando los días de la semana) y la llena con null. Luego usa map para iterar sobre estos elementos.
    return new Array(7).fill(null).map(() => { // DIAS EN UNA SEMANA
      // Incrementa currentMonthCount en 1. Esto se utiliza para contar los días del mes de manera secuencial.
      currentMonthCount++;
      // Crea una nueva fecha usando currentMonthCount y la convierte a un objeto dayjs. Esto representa el día actual en el calendario y se devuelve.
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  // Devuelve daysMatrix, que es una matriz 2D donde cada submatriz representa una semana y cada elemento de la submatriz es un objeto dayjs que representa un día.
  return daysMatrix;
}