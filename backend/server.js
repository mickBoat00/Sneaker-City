import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js'

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/sneakers/', (req, res) => {
    res.json(products);
});


app.get('/api/sneakers/:id/', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(port, () => console.log(`Server started on port ${port}`));