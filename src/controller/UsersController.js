

const UserModel = require ('../models/UsersModel')


// create user start

exports.createUser = async (req, res)=>{
try {
  const data = req.body;
  const result = await UserModel.create(data);
  res.status(200).json({status: 'success', data: result});
  } 
catch (error) {
  res.status(200).json({status: 'fail', message: error.message});
    }
};

//  create user end

// read user create start

exports.readUser = async (req, res)=>{
  try {
    const result = await UserModel.find();
    res.status(200).json({status: 'success', data: result});
    } 
  catch (error) {
    res.status(200).json({status: 'fail', message: error.message});
      }
};

// read user create end

// update user create start

exports.updateUser = async (req, res)=>{
  try {
    const {id }= req.params;
    const data = req.body;
    const result = await UserModel.findByIdAndUpdate(id, data);
    res.status(200).json({status: 'success', data: result});
    } 
  catch (error) {
    res.status(200).json({status: 'fail', message: error.message});
      }
};

// update user create end

// delete user create start

exports.deleteUser = async (req, res)=>{
  try {
    const userId = req.params.id;
    const query = { _id: userId };



   
    const result = await UserModel.deleteOne(query);

    if (result.deletedCount >0) {
      res.status(200).json({status: 'success', message: 'user deleted'});
    }
    else {
      res.status(200).json({status: 'fail', message: 'user not found'});
    }
      } 
  catch (error) {
    res.status(200).json({status: 'fail', message: error.message});
      }
};

// delete user create end