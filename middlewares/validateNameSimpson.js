const validateNameSimpson = async (req, res, next) => {
  const { name } = req.body;
  if (!name || !name.trim())
    return res.status(500).json({ message: "Nome é obrigatório" });
  next();
};

module.exports = validateNameSimpson;
