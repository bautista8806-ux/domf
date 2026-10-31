function calcular() {
  // 1. Acceder a los inputs del formulario recorriendo el DOM (sin usar ID ni Name)
  const inputsFormulario = document.querySelectorAll("form input");

  // Orden de los inputs según el HTML:
  // [0] Producto (text), [1] Cantidad (number), [2] Precio unitario (number)
  // [3] Subtotal (readonly), [4] IVA (readonly), [5] Descuento (readonly), [6] Total (readonly)
  const inputCantidad = inputsFormulario[1];
  const inputPrecio = inputsFormulario[2];

  const inputSubtotal = inputsFormulario[3];
  const inputIva = inputsFormulario[4];
  const inputDescuento = inputsFormulario[5];
  const inputTotal = inputsFormulario[6];

  // 2. Obtener y convertir valores numéricos
  const cantidad = Number(inputCantidad.value) || 0;
  const precioUnitario = Number(inputPrecio.value) || 0;

  // Validación básica opcional
  if (cantidad <= 0 || precioUnitario <= 0) {
    alert("Por favor, ingresa una cantidad y un precio unitario válidos mayores a 0.");
    inputCantidad.focus();
    return;
  }

  // 3. Definir constantes (IVA del 19% y regla de descuento: > 10 unidades aplica un 5%)
  const PORCENTAJE_IVA = 0.19; // 19%
  const LIMITE_DESCUENTO = 10;
  const PORCENTAJE_DESCUENTO = 0.05; // 5%

  // 4. Cálculos intermedios
  const subtotal = cantidad * precioUnitario;
  
  // Regla de descuento
  let descuento = 0;
  if (cantidad > LIMITE_DESCUENTO) {
    descuento = subtotal * PORCENTAJE_DESCUENTO;
  }

  // El IVA se suele calcular sobre el subtotal (o sobre el subtotal menos el descuento, según el caso de negocio)
  const iva = subtotal * PORCENTAJE_IVA;
  
  // Total a pagar = Subtotal + IVA - Descuento
  const totalPagar = subtotal + iva - descuento;

  // 5. Formatear y mostrar los resultados en los inputs correspondientes usando toLocaleString('es-CO')
  const formatoMoneda = (valor) => {
    return valor.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  };

  inputSubtotal.value = formatoMoneda(subtotal);
  inputIva.value = formatoMoneda(iva);
  inputDescuento.value = formatoMoneda(descuento);
  inputTotal.value = formatoMoneda(totalPagar);
}



