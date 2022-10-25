import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema(
	{  
		category : {type: String},
		sub: [String],		
	},	
);

const Category = mongoose.model("Category", categoriesSchema);

export default Category;