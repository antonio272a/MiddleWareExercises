const fs = require("fs/promises");

const createSimpson = async (req, res) => {
  try {
    const FILE_PATH = "./simpsons.json";
    const { id, name } = req.body;
    const file = await fs.readFile(FILE_PATH, "utf8");
    const charArray = JSON.parse(file);
    const newCharArray = [...charArray, { id, name }];
    await fs.writeFile(FILE_PATH, JSON.stringify(newCharArray));
    return res.status(201).json({ message: "Simpson criado com sucesso!" });
  } catch (e) {
    console.log(e);
  }
};

module.exports = createSimpson;
