const greeting = (req, res) => {
  const { name, age } = req.body;

  if (age >= 18) res.status(200).json({ message: `Hello, ${name}!` });

  return res.status(401).json({ message: "Unauthorized" });
};

module.exports = greeting;
