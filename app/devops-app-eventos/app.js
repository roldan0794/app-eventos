const express = require('express');
const app = express();

const PORT = process.env.APP_PORT || 3000;
const ENTORN_NAME = process.env.NODE_ENV || 'Desarrollo';

const eventos = [
  {id: 1, nombre: "DevOps Academy 2026", fecha: "2026-07-17", lugar: "Saltillo" },
  {id: 2, nombre: "Confenrencia de Azure 4", fecha: "2026-07-14", lugar: "Accenture facilities"},
  {id: 3, nombre: "Laboratorio de Azure 3", fecha: "2026-07-15", lugar: "online"},
  {id: 4, nombre: "Clase CI/CD", fecha: "2026-07-14", lugar: "Monterrey"}
];

app.get('/', (req, res) => {
  res.json({
    proyecto: "Proyecto DevOps: Sistema de gestión de eventos",
    entorno: ENTORN_NAME,
    estado_conexion_db: "(OK)",
    total_eventos: eventos.length,
    lista_eventos: eventos
  });
});

app.get('/health', (req,res) => {
  res.status(200).json({ status: "UP", uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log('Servidor de Eventos corriendo en el puerto ${PORT} en entorno de ${ENTORN_NAME}');
});
