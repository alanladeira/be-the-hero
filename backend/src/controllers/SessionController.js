const connection = require("../database/connection");

module.exports = {
  async store(req, res) {
    const { id } = req.body;
    const ongExist = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ongExist) {
      return res.status(400).json({ error: "ONG does not exist" });
    }

    return res.json({ ongExist });
  }
};
