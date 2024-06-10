const knex = require("knex")(require("../knexfile"));


async function getConsultations(_req, res) {
  try {
    const data = await knex("consultations");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving consultations: ${err}`);
  }
}


async function getConsultation(_req, res) {
  const { consultationId } = _req.params;
  try {
    const data = await knex("consultations").where("id", consultationId).first();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving consultation: ${err}`);
  }
}


async function createConsultation(_req, res) {
  if (
    !_req.body ||
    !_req.body.firstName ||
    !_req.body.lastName ||
    !_req.body.email ||
    !_req.body.phone ||
    !_req.body.description ||
    !_req.body.hairType ||
    !_req.body.hairTexture ||
    !_req.body.scalpCondition ||
    !_req.body.hairConcerns ||
    !_req.body.washingFrequency ||
    !_req.body.hairProducts ||
    !_req.body.heatStylingFrequency ||
    !_req.body.colorTreatment
  ) {
    return res.status(400).send("Incomplete Body");
  }

  try {
    const id = await knex("consultations").insert(_req.body);
    const data = await knex("consultations").where("id", id[0]).first();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error creating consultation: ${err}`);
  }
}


// async function deleteConsultation(_req, res) {
//   const { consultationId } = _req.params;
//   try {
//     const data = await knex("consultations").where("id", consultationId).del();
//     res.status(204).json(data);
//   } catch (err) {
//     res.status(400).send(`Error deleting consultation: ${err}`);
//   }
// }

async function deleteConsultation(req, res) {
    const { consultationId } = req.params;
    try {
      const rowsAffected = await knex("consultations").where("id", consultationId).del();
      if (rowsAffected) {
        res.status(204).send();
      } else {
        res.status(404).send(`Consultation with ID ${consultationId} not found.`);
      }
    } catch (err) {
      res.status(400).send(`Error deleting consultation: ${err.message}`);
    }
}
  

module.exports = {
  getConsultations,
  getConsultation,
  createConsultation,
  deleteConsultation,
};
