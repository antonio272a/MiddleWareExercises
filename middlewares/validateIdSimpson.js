const fs = require("fs/promises");

const validateIdSimpson = async (req, res, next) => {
  const FILE_PATH = "./simpsons.json";
  const file = await fs.readFile(FILE_PATH, "utf8");
  const charArray = JSON.parse(file);
  const { id } = req.body;
  const exists = charArray.find((char) => Number(char.id) === Number(id));

  if (exists) {
    return res
      .status(500)
      .json({ message: "Não é possível cadastrar esse simpson!" });
  }

  next();
};

module.exports = validateIdSimpson;
