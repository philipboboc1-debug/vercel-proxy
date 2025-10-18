const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send("No URL provided.");

  try {
    const response = await fetch(target);
    const html = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(html);
  } catch (err) {
    res.status(500).send("Error fetching URL");
  }
};