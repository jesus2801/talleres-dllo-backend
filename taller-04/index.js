import express from 'express'
import users from './24-taller-04-datos.json' with { type: "json" };

const app = express();
const port = 3000;

app.use(express.json());

const updateJsonFile = (data) => {
  const jsonString = JSON.stringify(data, null, 2);

  // Write JSON string to a file
  fs.writeFile('24-taller-04-datos.json', jsonString, (err) => {
    if (err)
      console.error('Error writing the JSON file', err);
  });
}

// Punto 1: Obtener usuarios con un hobby específico
app.get('/users/hobby', (req, res) => {
  const { hobby } = req.query;
  const result = users.filter(user => user.hobbies.includes(hobby));
  res.json(result);
});

// Punto 2: Verificar si existe un usuario con el código enviado
app.get('/users/exists', (req, res) => {
  const { codigo } = req.query;
  const exists = users.some(user => user.codigo === codigo);
  res.json({ exists });
});

// Punto 3: Contar usuarios con un hobby específico
app.get('/users/hobby/count', (req, res) => {
  const { hobby } = req.query;
  const count = users.filter(user => user.hobbies.includes(hobby)).length;
  res.json({ count });
});

// Punto 4: Obtener usuarios con menos de 3 hobbies
app.get('/users/is-free', (req, res) => {
  const result = users.filter(user => user.hobbies.length < 3);
  res.json(result);
});

// Punto 5: Agregar un hobby a un usuario si tiene menos de 3 hobbies
app.post('/users/suggest', (req, res) => {
  const { codigo, hobby } = req.body;
  let user = users.find(user => user.codigo === codigo);
  if (user) {
    if (user.hobbies.length < 3) {
      if (user.hobbies.includes(hobby)) {
        return res.status(400).json({ message: "El hobby ya existe" });
      }

      user.hobbies.push(hobby);
      updateJsonFile(users);

      res.json({ message: "Hobby agregado", user });
    } else {
      res.json({ message: "El usuario ya tiene 3 hobbies, no se puede agregar" });
    }
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
});

// Punto 6: Registrar un nuevo usuario
app.post('/users', (req, res) => {
  const { codigo, nombre, apellido, hobbies } = req.body;
  if (!codigo || !nombre || !apellido || !hobbies || hobbies.length < 2) {
    return res.status(400).json({ message: "Datos inválidos, se requieren al menos 2 hobbies" });
  }

  if (users.some(user => user.codigo === codigo)) {
    return res.status(400).json({ message: "El código ya está en uso" });
  }

  const usuarioNuevo = { codigo, nombre, apellido, hobbies };
  users.push(usuarioNuevo);
  updateJsonFile(users)
  res.status(201).json({ message: "Usuario registrado", usuarioNuevo });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

