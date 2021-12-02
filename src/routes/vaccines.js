const express = require('express');
const router = express.Router();
const controller = require('../controllers/vaccineController');

router.post("/", controller.registerVaccine);
router.get("/", controller.getAllVaccines);
router.get("/:id", controller.getVaccine);
router.put("/:id", controller.updateVaccineRegister);
router.patch("/:id/vaccinated", controller.isVaccinated);
router.delete("/:id", controller.deleteVaccine);

module.exports = router;