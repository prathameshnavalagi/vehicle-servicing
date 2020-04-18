var util = require('./util');
var fs = require("fs");

exports.getUser = (req, res) => {
    console.log("inside getUser"); 
    var path = 'D:/Prathamesh/workplace/vehicle-servicing/mock-api/manageUserData.json';
    try {         
        //console.log(req.params);
        if(req.params){
            if(req.params.phone == '' || 
               req.params.phone == undefined ||
               req.params.phone == null){
                //console.log("Enter phone number to serach");
                res.status(400).send(util.badRequest);
            }else{
                fs.readFile(path, function(err, data) { 
                    if (err){
                        //console.log("err."+err);
                        res.status(500).send(util.internalServerError);
                    } else {
                        // Converting to JSON 
                        const response = JSON.parse(data);              
                        //console.log(response); // Print users 
                        const usersData = response.data;;
                        let dataPresent = false;
                        let presentUserData = {};
                        //console.log(usersData.length - 1);
                        for(let userIndex in usersData){
                            if(req.params.phone === usersData[userIndex].phone){
                                //console.log("user from file.."+userData[user].phone);
                                dataPresent = true;
                                presentUserData = usersData[userIndex];
                                //console.log("presentUserData.."+ JSON.stringify(presentUserData));                                
                            }
                            //console.log("userIndex.."+userIndex);
                            //console.log("usersData.length-1.."+ (usersData.length-1));
                            if(userIndex == (usersData.length-1)){
                                if(dataPresent){
                                    res.status(201).send(presentUserData);
                                }else{
                                    console.log(util.noDataFound);
                                    res.status(204).send(util.noDataFound);
                                }
                            }
                        }
                    }
                });
            }
            
        }else{
            res.status(400).send(util.badRequest);
        }        
    } catch (err) {
        res.status(500).send(util.internalServerError);
    }
};

exports.updateUser = (req, res) => {
    console.log("inside updateUser");
    var path = 'D:/Prathamesh/workplace/vehicle-servicing/mock-api/manageUserData.json';
    try {
        if(req.body){
            const reqParam = req.body;
            fs.readFile(path, function(err, data) { 
                if (err){
                    //console.log("err."+err);
                    res.status(500).send(util.internalServerError);
                } else {
                    var usersData = {}
                    var usersDataArr = [];
                    usersData = JSON.parse(data);
                    usersDataArr = usersData.data;
                    var userIndex = usersDataArr.findIndex(function (userObj){ // Checks if the POST request have the same id as JSON file
                        console.log("phone"+userObj.phone);
                        return reqParam.phoneNumber == userObj.phone;
                    })
                    console.log("userIndex"+userIndex);
                    if(userIndex!=-1){
                        usersDataArr[userIndex].name = reqParam.name;
                        usersDataArr[userIndex].phone = reqParam.phoneNumber;
                        usersDataArr[userIndex].address = reqParam.address;
                        usersDataArr[userIndex].city = reqParam.city;
                        let updatedData = {"data": usersDataArr}
                        fs.writeFile(path, JSON.stringify(updatedData), (err) => {
                            console.log(err || 'complete');
                            if(err){
                                res.status(204).send(util.noDataFound);
                            }else{
                                res.status(201).send(util.success);
                            }
                        });
                    }else{
                        console.log("user data not available");
                        res.status(204).send(util.noDataFound);
                    }
                }
            });
        }else{
            res.status(400).send(util.badRequest);
        }
    } catch (err) {
        res.status(500).send(util.internalServerError);
    }
};

exports.getNewServiceVehcileList = (req, res) => {
    console.log("inside getNewServiceVehcileList"); 
    var path = 'D:/Prathamesh/workplace/vehicle-servicing/mock-api/newServiceVehicleList.json';
    try {         
        //console.log(req.params);
        fs.readFile(path, function(err, data) { 
            if (err){
                //console.log("err."+err);
                res.status(500).send(util.internalServerError);
            } else {
                var vehicleData = {}
                var vehicleDataArr = [];
                vehicleData = JSON.parse(data);
                vehicleDataArr = vehicleData.vehicleList;
                if(vehicleDataArr.length > 0){
                    res.status(201).send(vehicleDataArr);
                }else{
                    res.status(204).send(util.noDataFound);
                }
            }
        });      
    } catch (err) {
        res.status(500).send(util.internalServerError);
    }
};

