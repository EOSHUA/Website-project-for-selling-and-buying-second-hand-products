const mongoose = require('mongoose');
const ItemsSchema = new mongoose.Schema({
    idCategory: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
   
    idSubCategory: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    city: {
       type: String,
       required: true
    },
    description: {
        type: String,
        require: true
    },
    image:{
        type:String

    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    productStatus: {
        type: String,
        required: true
    },
    
    isActive: {
        type: Boolean,
        default: true,
        required: true
    }
})
const item={
    idCategory:'65b64252f4847f7f2148075d',
    idSubCategory:'65b664adf4874f7f24180762',
    userId:'65b646adf4874f7f21480862',
    city:'bitar-eilit',
    description:'bla bla bla bla bla bla bla bla bla bla bla',
    productStatus:"good-"

}
const itemsModel = mongoose.model('items',ItemsSchema)


const insert = async()=>{
    try {
        const data= await itemsModel.create(item)
    } catch (error) {
        console.error(error);
    }
}

insert()

module.exports = itemsModel