import mongoose from 'mongoose'
import Category from "../models/categoryModel.js"
import Product from '../models/productModel.js'
import categories from "../data/categories.js"
import products from '../data/products.js'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    if (conn) {
      await Category.deleteMany();
      Category.collection.insertMany(categories, function (err, r) {
        console.log("insert category data");
      });
      await Product.deleteMany();
      Product.collection.insertMany(products, function (err, r) {
        console.log("insert Product data");
      });
    }

  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
