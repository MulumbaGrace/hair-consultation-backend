const router = require("express").Router();
const consultationController = require("../controllers/consultationController");

router
  .route("/")
  .get(consultationController.getConsultations)
  .post(consultationController.createConsultation);

router
  .route("/consultations/:consultationId")
  .get(consultationController.getConsultation)
  .delete(consultationController.deleteConsultation);

module.exports = router;
