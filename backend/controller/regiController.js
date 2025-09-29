const register = require("../model/regiModel");
const bcrypt = require("bcrypt");

exports.createRegi = async (req, res) => {
  try {
    const exits = await register.findOne({ email: req.body.email });
    if (exits) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const b_pass = await bcrypt.hash(req.body.password, 10);
    req.body.password = b_pass;
    var data = await register.create(req.body);
    res.status(200).status(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    var data = await register.find({ email: req.body.email });
    if(data.length==1){
      bcrypt.compare(req.body.password,data[0].password, function(err,result){
        if(result==true){
          res.status(200).json({
            message:'login successfully'
          })
        }
        else{
          res.status(403).json({
            message:'Invalid email and password'
          })
        }
      })
    }
    else{
      res.status(403).json({
        message:'Invalid email and password'
      })
    }
  } catch (error) {
     res.status(500).json({error:error.message})
  }
};
