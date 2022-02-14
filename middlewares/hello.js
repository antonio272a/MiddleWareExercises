const hello = (req, res) => {
  const { name } = req.body;
  return res.status(201).json({ message: `Hello, ${name}!` });
};

module.exports = hello;
