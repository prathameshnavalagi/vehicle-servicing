var util = require('./util');
var fs = require("fs");

exports.getUser = (req, res) => {
    console.log("inside getUser"); 
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/manageUserData.json';
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
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/manageUserData.json';
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
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/newServiceVehicleList.json';    
    try {         
        //console.log(req.params);
        fs.readFile(path, function(err, data) { 
            if (err){
                console.log("err."+err);
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

exports.assignSupervisor = (req, res) => {
    console.log("inside assignSupervisor");
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/newServiceVehicleList.json'; 
    try {         
        //console.log(req.params);
        if(req.body){
            const reqParam = req.body;
            fs.readFile(path, function(err, data) { 
                if (err){
                    console.log("err."+err);
                    res.status(500).send(util.internalServerError);
                } else {
                    var vehicleData = {}
                    var vehicleDataArr = [];
                    vehicleData = JSON.parse(data);
                    vehicleDataArr = vehicleData.vehicleList;
                    var selectedDataArr = [];
                    var supervisorName = reqParam.supervisorName;
                    selectedDataArr = reqParam.selectedData;
                    for(var selectedDataArrIndex in selectedDataArr){
                        if(selectedDataArr[selectedDataArrIndex].supervisorAssigned==true){
                            vehicleDataArr[selectedDataArrIndex]['supervisorName'] = supervisorName;
                            vehicleDataArr[selectedDataArrIndex]['supervisorAssigned'] = true;
                        }
                        else{
                            vehicleDataArr[selectedDataArrIndex]['supervisorName'] = "";
                            vehicleDataArr[selectedDataArrIndex]['supervisorAssigned'] = false;
                        }
                        if(selectedDataArrIndex == (selectedDataArr.length-1)){
                            let updatedData = {"vehicleList": vehicleDataArr}
                            fs.writeFile(path, JSON.stringify(updatedData), (err) => {
                                console.log(err || 'complete');
                                if(err){
                                    res.status(204).send(util.noDataFound);
                                }else{
                                    res.status(201).send(util.success);
                                }
                            });
                        }
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

exports.getReport = (req, res) => {
    console.log("inside getReport"); 
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/report.json';
    try {
        fs.readFile(path, function(err, data) { 
            if (err){
                //console.log("err."+err);
                res.status(500).send(util.internalServerError);
            } else {
                // Converting to JSON 
                const response = JSON.parse(data);              
                //console.log(response); // Print users 
                const reportData = response.report;
                if(reportData.length > 0){
                    res.status(201).send(reportData);
                }else{
                    console.log(util.noDataFound);
                    res.status(204).send(util.noDataFound);
                }
            }
        });              
    } catch (err) {
        res.status(500).send(util.internalServerError);
    }
};

exports.getServiceBillingDetails = (req, res) => {
    console.log("inside getServiceBillingDetails"); 
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/trackingDetails.json';
    try {
        if(req.params){
            var reqParam = req.params;
            fs.readFile(path, function(err, data) { 
                if (err){
                    //console.log("err."+err);
                    res.status(500).send(util.internalServerError);
                } else {
                    // Converting to JSON 
                    const response = JSON.parse(data);              
                    //console.log(response); // Print users 
                    const trackingData = response.trackingData;
                    var vehicleData = [];
                    if(trackingData.length > 0){
                        for(var trackingDataIndex in trackingData){
                            if(trackingData[trackingDataIndex].trackingId == reqParam.trackingId){
                                vehicleData = trackingData[trackingDataIndex].vehicleList;
                            }
                            if(trackingDataIndex == (trackingData.length - 1)){
                                if(vehicleData.length > 0){
                                    res.status(201).send(vehicleData);
                                }else{
                                    console.log(util.noDataFound);
                                    res.status(204).send(util.noDataFound);
                                }
                            }
                        }
                    }else{
                        console.log(util.noDataFound);
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

exports.getServiceHistory = (req, res) => {
    console.log("inside getServiceHistory"); 
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/servicingHistory.json';
    try {
        fs.readFile(path, function(err, data) { 
            if (err){
                //console.log("err."+err);
                res.status(500).send(util.internalServerError);
            } else {
                // Converting to JSON 
                const response = JSON.parse(data);              
                //console.log(response); // Print users 
                const serviceHistoryData = response.history;
                if(serviceHistoryData.length > 0){
                    res.status(201).send(serviceHistoryData);
                }else{
                    console.log(util.noDataFound);
                    res.status(204).send(util.noDataFound);
                }                
            }
        });
    } catch (err) {
        res.status(500).send(util.internalServerError);
    }
};

exports.assignEngineer = (req, res) => {
    console.log("inside assignEngineer");
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/newServiceVehicleList.json'; 
    try {         
        //console.log(req.params);
        if(req.body){
            const reqParam = req.body;
            fs.readFile(path, function(err, data) { 
                if (err){
                    console.log("err."+err);
                    res.status(500).send(util.internalServerError);
                } else {
                    var vehicleData = {}
                    var vehicleDataArr = [];
                    vehicleData = JSON.parse(data);
                    vehicleDataArr = vehicleData.vehicleList;
                    var selectedDataArr = [];
                    var engineerName = reqParam.engineerName;
                    selectedDataArr = reqParam.selectedData;
                    for(var selectedDataArrIndex in selectedDataArr){
                        if(selectedDataArr[selectedDataArrIndex].needEngineer == true){
                            vehicleDataArr[selectedDataArrIndex]['engineerName'] = engineerName;
                        }
                        if(selectedDataArrIndex == (selectedDataArr.length-1)){
                            let updatedData = {"vehicleList": vehicleDataArr}
                            fs.writeFile(path, JSON.stringify(updatedData), (err) => {
                                console.log(err || 'complete');
                                if(err){
                                    res.status(204).send(util.noDataFound);
                                }else{
                                    res.status(201).send(util.success);
                                }
                            });
                        }
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

exports.getServiceAprovalDetails = (req, res) => {
    console.log("inside getServiceAprovalDetails");
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/serviceAprovalDetails.json';
    try {         
        //console.log(req.params);
        fs.readFile(path, function(err, data) { 
            if (err){
                console.log("err."+err);
                res.status(500).send(util.internalServerError);
            } else {
                var serviceApprovalData = {}
                var serviceApprovalDataArr = [];
                serviceApprovalData = JSON.parse(data);
                serviceApprovalDataArr = serviceApprovalData.serviceAprovalDetails;
                if(serviceApprovalDataArr.length > 0){
                    res.status(201).send(serviceApprovalDataArr);
                }else{
                    res.status(204).send(util.noDataFound);
                }
            }
        });      
    } catch (err) {
        res.status(500).send(util.internalServerError);
    }
};

exports.getPendingServices = (req, res) => {
    console.log("inside getPendingServices");
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/pendingServices.json';
    try {         
        //console.log(req.params);
        fs.readFile(path, function(err, data) { 
            if (err){
                console.log("err."+err);
                res.status(500).send(util.internalServerError);
            } else {
                var pendingSetrviceData = {}
                var pendingSetrviceDataArr = [];
                pendingSetrviceData = JSON.parse(data);
                pendingSetrviceDataArr = pendingSetrviceData.pendingServiceList;
                if(pendingSetrviceDataArr.length > 0){
                    res.status(201).send(pendingSetrviceDataArr);
                }else{
                    res.status(204).send(util.noDataFound);
                }
            }
        });      
    } catch (err) {
        res.status(500).send(util.internalServerError);
    }
};

exports.assignToPendingServiceSupervisor = (req, res) => {
    console.log("inside assignToPendingServiceSupervisor");
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/pendingServices.json'; 
    try {         
        //console.log(req.params);
        if(req.body){
            const reqParam = req.body;
            fs.readFile(path, function(err, data) { 
                if (err){
                    console.log("err."+err);
                    res.status(500).send(util.internalServerError);
                } else {
                    var pendingSetrviceData = {}
                    var pendingSetrviceDataArr = [];
                    pendingSetrviceData = JSON.parse(data);
                    pendingSetrviceDataArr = pendingSetrviceData.pendingServiceList;
                    if(pendingSetrviceDataArr.length > 0){
                        var supervisorName = reqParam.supervisorName;
                        var supervisorIndex = reqParam.index;
                        pendingSetrviceDataArr[supervisorIndex]['supervisorName'] = supervisorName;
                        let updatedData = {"pendingServiceList": pendingSetrviceDataArr}
                        fs.writeFile(path, JSON.stringify(updatedData), (err) => {
                            console.log(err || 'complete');
                            if(err){
                                res.status(204).send(util.noDataFound);
                            }else{
                                res.status(201).send(util.success);
                            }
                        });
                    }else{
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

exports.approveVehicleService = (req, res) => {
    console.log("inside approveVehicleService");
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/serviceAprovalDetails.json'; 
    try {         
        //console.log(req.params);
        if(req.body){
            const reqParam = req.body;
            fs.readFile(path, function(err, data) { 
                if (err){
                    console.log("err."+err);
                    res.status(500).send(util.internalServerError);
                } else {
                    var serviceApproveData = {}
                    var serviceApproveDataArr = [];
                    serviceApproveData = JSON.parse(data);
                    serviceApproveDataArr = serviceApproveData.serviceAprovalDetails;
                    if(serviceApproveDataArr.length > 0){
                        var serviceStatus = reqParam.status;
                        var statusIndex = reqParam.index;
                        serviceApproveDataArr[statusIndex]['approved'] = serviceStatus;
                        let updatedData = {"serviceAprovalDetails": serviceApproveDataArr}
                        fs.writeFile(path, JSON.stringify(updatedData), (err) => {
                            console.log(err || 'complete');
                            if(err){
                                res.status(204).send(util.noDataFound);
                            }else{
                                res.status(201).send(util.success);
                            }
                        });
                    }else{
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

exports.assignSupervisorForStatus = (req, res) => {
    console.log("inside assignSupervisorForStatus");
    var path = 'C:/Users/Shree/Desktop/Prathamesh/workplace/vehicle-servicing/mock-api/serviceAprovalDetails.json'; 
    try {         
        //console.log(req.params);
        if(req.body){
            const reqParam = req.body;
            fs.readFile(path, function(err, data) { 
                if (err){
                    console.log("err."+err);
                    res.status(500).send(util.internalServerError);
                } else {
                    var serviceApproveData = {}
                    var serviceApproveDataArr = [];
                    serviceApproveData = JSON.parse(data);
                    serviceApproveDataArr = serviceApproveData.serviceAprovalDetails;
                    if(serviceApproveDataArr.length > 0){
                        var supervisor = reqParam.supervisor;
                        var supervisorIndex = reqParam.index;
                        serviceApproveDataArr[supervisorIndex]['supervisorName'] = supervisor;
                        let updatedData = {"serviceAprovalDetails": serviceApproveDataArr}
                        fs.writeFile(path, JSON.stringify(updatedData), (err) => {
                            console.log(err || 'complete');
                            if(err){
                                res.status(204).send(util.noDataFound);
                            }else{
                                res.status(201).send(util.success);
                            }
                        });
                    }else{
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