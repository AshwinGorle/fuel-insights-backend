const restrictToAdmin = async (req, res, next) => {
    let token;
    const Authorization = req.headers["authorization"];
    if (Authorization && Authorization.startsWith("Bearer")) {
      try {
        token = Authorization.split(" ")[1];
        if (!token) {
          res
            .status(401)
            .send({ status: "failed", message: "Unauthorized user" });
        }
        //verifying token
        const { userId } = Jwt.verify(token, process.env.JWT_SECRET_KEY);
  
        //get user from token
        req.user = await UserModel.findOne({ _id: userId }).select('-password');
        if(req.user.role === 'admin' ){
          next();
        }else{
          res.status(401).send({ status: "failed", message: "Unauthorized user" });
        }
      } catch (err) {
        console.log(err);
        res.status(401).send({ status: "failed", message: "Unauthorized user" });
      }
    } else {
      res.status(401).send({ status: "failed", message: "Unauthorized user" });
    }
  };

  export default  restrictToAdmin;