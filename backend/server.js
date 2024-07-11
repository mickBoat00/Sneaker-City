import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


const port = process.env.PORT || 5000;


let products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 49.99 }
];


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json(products);
});


app.listen(port, () => console.log(`Server started on port ${port}`));