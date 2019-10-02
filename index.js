const express = require("express");

const server = express();

server.use(express.json());

const projects = [];
var counter = 0;

server.use((req, res, next) => {
  counter++;
  console.log(`Total number of requisitions: ${counter}`);
  console.time("Time spent requesting");
  next();
  console.timeEnd("Time spent requesting");
});

function checkProjectInArray(req, res, next) {
  const position = projects.findIndex(proj => proj.id === req.params.id);
  const project = projects[position];
  if (!project) {
    return res.status(400).json({
      error: "Project not exist"
    });
  }

  req.position = position;

  return next();
}

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] });

  return res.json(projects);
});

server.post("/projects/:id/tasks", checkProjectInArray, (req, res) => {
  const { title } = req.body;

  projects[req.position].tasks.push(title);

  return res.json(projects);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", checkProjectInArray, (req, res) => {
  const { title } = req.body;

  projects[req.position].title = title;

  return res.json(projects);
});

server.delete("/projects/:id", checkProjectInArray, (req, res) => {
  projects.splice(req.position, 1);

  return res.json(projects);
});

server.listen(3001);
