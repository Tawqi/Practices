const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Products = require("./models/products");
app.use(express.static("public"));


const dbURl = "mongodb+srv://name:password@cluster0.weqclte.mongodb.net/js-4?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURl)
  .then(() => app.listen(3000, () => console.log("its running")))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/home", (req, res) => {
  res.redirect("/");
}); 

// Makes a string safe for use in a regular expression.
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
// Single product page
app.get('/productpage/:name', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'results.html'))
})
// Data single product page
app.get('/product/:name', (req, res) => {
  const URLname = req.params.name;

  Products.findOne({ name: new RegExp(`^${URLname}$`, 'i') })
    .then(data => {
      if (!data) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error finding the product' });
    });
});

// Search Suggestion results
app.get("/search", (req, res) => {
  const q = req.query.search;

  if (!q || q.trim() === "") return res.json([]);

  // Split input into words, escape each word, then join with .*
  const words = q.trim().split(/\s+/); // split by any space
  const fuzzy = words.map(escapeRegex).join(".*");

  Products.find({
    name: { $regex: fuzzy, $options: "i" },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});
// Search results page
app.get('/searchpage/:name', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'searchpage.html'))
})
// Data for search result page
app.get('/serchedproducts/:name', (req, res) => {
  const URLname = req.params.name;

  Products.find({ name: new RegExp(URLname, 'i') }) // case-insensitive match
    .then(data => {
      if (data.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error finding the product' });
    });
});

