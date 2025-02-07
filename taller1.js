const convertidorTemp = (c) => {
  return c * (9 / 5) + 32;
}

console.log(convertidorTemp(10))

const resolvedor = (a, b, c, sign) => {
  if (sign)
    return (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
  else
    return (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
}

console.log(resolvedor(1, 5, 4, false))

const mejorParidad = (number) => {
  if (number % 2 === 0)
    return true;

  return false;
}

console.log(mejorParidad(20))

const peorParidad = (number) => {
  if (number === 1)
    return false;
  else if (number === 2)
    return true
  else if (number === 3)
    return false
  else if (number === 4)
    return true
  else if (number === 5)
    return false
  else if (number === 6)
    return true
  else if (number === 7)
    return false
  else if (number === 8)
    return true
  else if (number === 9)
    return false
  else if (number === 10)
    return true
}

console.log(peorParidad(20))
