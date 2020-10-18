
var Person = require('../models/Person');

//------1-----//For Regestering Person (Adding User)
exports.register = async function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var fname= post.first_name;
      var lname= post.last_name;
      var name= post.user_name;
      var pass= post.password;
      var job = post.job;
      var country = post.country;
      var email = post.email;
      var image = post.image;
      message = "Succesfully! Your account has been created.";
        await Person.query()
        .insert({ first_name: fname, last_name: lname,user_name: name,job: job, country: country, email: email, password: pass, image: image})
        .then(res.render('register.ejs',{message: message}))
        
   } 
   else {
         res.render('register');
      }
   };
 
//------2-----//To Log in //
exports.login = async function(req, res){
   var message = '';
   var sess = req.session; 

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      await Person.query()
      .where({user_name:name}).andWhere({password: pass})
      .then(function (person) {res.render('profile.ejs',{data:person}) })
   }
      else {
         message = 'Wrong Password or UserName';
      res.render('index.ejs',{message: message});
   }




};

//List All Users//
exports.usersList = async function(req, res){
    await Person.query()
    .then(function (person, index) {res.render('allUsers.ejs',{data:person, index:index}) });
};
//------3-----//Edit User Data
exports.editprofile= async function(req,res){
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }


   Person.query()
      .where({id:userId})
   db.query(sql, function(err, results){
      res.render('edit_profile.ejs',{data:results});
   });
};



//to logout//
exports.logout= async function(req,res){
   req.session.destroy(function(err) {
      res.redirect("/login");
   })
};
