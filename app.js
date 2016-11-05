var express = require ('express');
var app = express ();
var path = require('path');

 ///////try & error codes
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

/*app.get('/', function(req, res){
	res.render('./landing/landing.html');
}); 

app.listen(8080, function(){
	console.log('Listening on port 8080');
});
*/

//path resolution
app.use(express.static(__dirname + '/views'));
/*app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/landing'));
app.use(express.static(__dirname + '/pages'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/blog'));
*/

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.get('/subscribe',function(req,res){
  res.sendFile(path.join(__dirname+'/views/landing/landing.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/blog',function(req,res){
  res.sendFile(path.join(__dirname+'/views/blog/blog.html'));
  //__dirname : It will resolve to your project folder.
});



/*app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});
*/
app.listen(8080);

console.log("Running at Port 8080");