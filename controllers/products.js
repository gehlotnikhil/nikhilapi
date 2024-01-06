const products = require("../model/product")

const getAllProducts = async(req,res)=>{
    let {company,name,featured,sort,price,rating,select,page,limit}= req.query;
    let query = {};
    if(company){
        query.company = company
    }
    
    if(featured){
        query.featured = featured
    }
    if(price){
        query.price = price
    }
    if(rating){
        query.rating = rating
    }

    if(name){
        query.name = {$regex:name,$options:"i"};
    }
    let API_RESULT = products.find(query);
    let sortFix;
    console.log(API_RESULT);
    if(sort){
         sortFix = sort.split(",").join(" ");
        API_RESULT = API_RESULT.sort(sortFix)
    }
    let selectFix;
    if(select){
         selectFix = select.split(",").join(" ");
        API_RESULT = API_RESULT.select(selectFix);
    }

    page = Number(page) || 1
    limit = Number(limit) || 3
    skip = (page-1)*limit;



    const myData = await API_RESULT.skip(skip).limit(limit);
    res.status(201).send({myData})
}

const getAllProductsTesting = async(req,res)=>{
    const myData = await products.find(req.query);
    console.log(req.query)
    res.status(201).json(myData)}

module.exports = {
    getAllProducts,getAllProductsTesting
}