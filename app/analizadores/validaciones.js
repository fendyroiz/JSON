//cuatro errores posibles por el momento, las llaves cerradas, corchetes cerrados, comillas cerradas, error si no existe dos pundos antes de la tercera comilla (ESTO VA EN EL CICLO) comilla
//Mensajes de error si no ecuntran las llaves o o corchetes cerrados,
//despues de un corchete puede existir un conjunto de comillas seguidas de : de ahi encontrar un conjunto de llaves o un conjunto de corchetes, cuando existen el primer conjunto de comillas debe ser seguido por : de ahi encontrar otro conjunto de comillas seguidas de una coma
const validarJSON = (contenido) => {
    const errores = [];
    let entreComillas = false;
    let pila = [];
    let ultimaLlave = null;
  
    for (let i = 0; i < contenido.length; i++) {
      const caracter = contenido[i];
  
      if (caracter === '"') {
        entreComillas = !entreComillas;
      }
  
      if (!entreComillas) {
        if (caracter === '{') {
          pila.push({ caracter: '{', indice: i });
        } else if (caracter === '[') {
          pila.push({ caracter: '[', indice: i });
        } else if (caracter === '}') {
          if (pila.length === 0 || pila[pila.length - 1].caracter !== '{') {
            errores.push({
              mensaje: 'Cierre de llave sin su apertura correspondiente',
              posicion: i
            });
          } else {
            pila.pop();
          }
        } else if (caracter === ']') {
          if (pila.length === 0 || pila[pila.length - 1].caracter !== '[') {
            errores.push({
              mensaje: 'Cierre de corchete sin su apertura correspondiente',
              posicion: i
            });
          } else {
            pila.pop();
          }
        } else if (caracter === ':') {
          ultimaLlave = i;
        } else if (caracter === ',' && (contenido[i-1] === '{' || contenido[i-1] === '[')) {
          errores.push({
            mensaje: `Coma inesperada después de ${contenido[i-1] === '{' ? 'una llave abierta' : 'un corchete abierto'}`,
            posicion: i
          });
        }
      } else {
        if (caracter === ':' && !ultimaLlave) {
          errores.push({
            mensaje: 'Dos puntos inesperados dentro de las comillas',
            posicion: i
          });
        }
      }
    }
  
    while (pila.length > 0) {
      const ultimoNoCerrado = pila.pop();
      errores.push({
        mensaje: `Falta cierre de ${ultimoNoCerrado.caracter === '{' ? 'llave' : 'corchete'}`,
        posicion: contenido.length - 1
      });
    }
  
    return errores;
  };
  
  export default validarJSON;
  
  