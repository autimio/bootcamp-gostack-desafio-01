const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] });

  return res.json(projects);
});

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const pos = projects.findIndex(proj => proj.id === id);
  projects[pos].tasks.push(title);

  return res.json(projects);
});

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const pos = projects.findIndex(proj => proj.id === id);
  projects[pos].title = title;

  return res.json(projects);
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const pos = projects.findIndex(proj => proj.id === id);
  projects.splice(pos, 1);

  return res.json(projects);
});

server.listen(3001);