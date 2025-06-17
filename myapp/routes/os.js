const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res) => {
  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    uptime: os.uptime()
  });
});

router.get('/cpus', (req, res) => {
  res.json(os.cpus());
});

router.get('/cpus/:id', (req, res) => {
  const cpus = os.cpus();
  const id = parseInt(req.params.id);
  if (id >= 0 && id < cpus.length) {
    res.json(cpus[id]);
  } else {
    res.status(404).json({ error: "CPU not found" });
  }
});

module.exports = router;
