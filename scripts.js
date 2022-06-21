//Calcular pagos en cuotas de un monto determinado

let prestamo, cuotas, numero;
const INTERESES1 = 1.10;
const INTERESES2 = 1.20;
const INTERESES3 = 1.30;
const resultado = (a, b, c) => (a * b) / c;

do {
  prestamo = parseFloat(prompt("Ingrese el monto que desea como prestamo"));
  alert("3 cuotas:10% - 6 cuotas:20% - 12 cuotas:30%");
  cuotas = parseFloat(
    prompt("Cuotas disponibles: 3 - 6 - 12. Ingrese el que desee")
  );
} while (isNaN(prestamo) || isNaN(cuotas) || cuotas === 0);

switch (cuotas) {
  case 3:
    alert(
      "Usted debera pagar " +
        cuotas +
        " cuotas de " +
        resultado(prestamo, INTERESES, cuotas)
    );
    break;
  case 6:
    alert(
      "Usted debera pagar " +
        cuotas +
        " cuotas de " +
        resultado(prestamo, INTERESES2, cuotas)
    );
    break;
  case 12:
    alert(
      "Usted debera pagar " +
        cuotas +
        " cuotas de " +
        resultado(prestamo, INTERESES3, cuotas)
    );
    break;
  default:
    alert("Monto de cuotas no valido");
}

