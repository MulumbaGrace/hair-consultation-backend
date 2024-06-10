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

router.get('/:consultationId', consultationController. getConsultation);
router.delete('/:consultationId', consultationController.deleteConsultation);


module.exports = router;
