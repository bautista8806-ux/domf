function calcularPresupuesto() {
  // 1. Acceder a los inputs del formulario recorriendo el DOM (sin usar ID ni Name)
  // Seleccionamos todos los elementos <input> dentro del formulario
  const inputsFormulario = document.querySelectorAll("form input");

  const inputInvitados = inputsFormulario[0];
  const inputCostoComida = inputsFormulario[1];
  const inputCostoBebida = inputsFormulario[2];
  const inputCostoDecoracion = inputsFormulario[3];
  const inputCostoMusica = inputsFormulario[4];
  const inputPropinaPorc = inputsFormulario[5];

  // 2. Obtener y convertir los valores a números (manejando vacíos como 0)
  const invitados = Number(inputInvitados.value) || 0;
  const costoComida = Number(inputCostoComida.value) || 0;
  const costoBebida = Number(inputCostoBebida.value) || 0;
  const decoracion = Number(inputCostoDecoracion.value) || 0;
  const musica = Number(inputCostoMusica.value) || 0;
  const propinaPorc = Number(inputPropinaPorc.value) || 0;

  // 3. Validación: ¿Qué pasa si el número de invitados es 0 o está vacío?
  if (invitados <= 0) {
    alert("Por favor, ingresa un número de invitados válido mayor a 0.");
    inputInvitados.focus();
    return;
  }

  // 4. Cálculos intermedios usando variables
  const comidaTotal = invitados * costoComida;
  const bebidaTotal = invitados * costoBebida;
  const subtotal = comidaTotal + bebidaTotal + decoracion + musica;
  const propina = subtotal * (propinaPorc / 100);
  const totalGeneral = subtotal + propina;
  const costoPorInvitado = totalGeneral / invitados;

  // Arreglo con los resultados ordenados exactamente como aparecen las filas de la tabla
  const resultados = [
    comidaTotal,
    bebidaTotal,
    decoracion,
    musica,
    subtotal,
    propina,
    totalGeneral,
    costoPorInvitado
  ];

  // 5. Acceder a las celdas de la columna "Valor" recorriendo la tabla (querySelectorAll / children)
  const filasTabla = document.querySelectorAll("tbody tr");

  filasTabla.forEach((fila, indice) => {
    // Cada fila tiene 2 celdas: <td>Concepto</td> y <td>Valor</td> (la segunda es children[1])
    const celdaValor = fila.children[1];

    if (celdaValor) {
      // 6. Formatear como dinero con toLocaleString('es-CO') antes de escribirlo
      const valorNumerico = resultados[indice];
      celdaValor.textContent = valorNumerico.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
    }
  });
}