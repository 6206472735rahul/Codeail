module.exports.profile= function(req,res){
  //  return res.end("<h1>Users profiles</h1>");

    return res.render('user_profile',{
        title:"user_profile"
});
}