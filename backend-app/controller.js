var util = require('./util');
var fs = require("fs");
exports.updateUser = (req, res) => {
    console.log("inside updateUser");
    try {
        //console.log(req);
        if(req.body){
            res.status(201).send(util.success);
        }else{
            res.status(400).send(util.badRequest);
        }
    } catch (err) {
        res.status(500).send(JSON.stringify(util.internalServerError));
    }
};