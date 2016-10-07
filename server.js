var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var exampleone={
    title:'Example-one|Nilashree Shirodkar',
    heading:'Example-one',
    date:'07/10/2016',
    content: 
        `<p>
        Hello everyone !! This is my first html example.Hello everyone !! This is my first html example.
        Hello everyone !! This is my first html example.Hello everyone !! This is my first html example.
        </p>   
    <p>
        I am enjoying learning it.I am enjoying learning it.I am enjoying learning it.I am enjoying learning it.
        I am enjoying learning it.I am enjoying learning it.I am enjoying learning it.I am enjoying learning it.
        I am enjoying learning it.I am enjoying learning it.I am enjoying learning it.I am enjoying learning it.
    </p>
    <p>
    Trying to be a web developer soon.Trying to be a web developer soon.Trying to be a web developer soon.Trying to be a web developer soon.Trying to be a web developer soon.
     Trying to be a web developer soon.Trying to be a web developer soon.Trying to be a web developer soon.     
    </p>`
};

function createtemplate(data)
{
    
var date=data.date;
var heading=data.geading;
var title=data.title;
var content=data.content;
var htmltemplate=
    `<html>
<head>
<title>
   ${title}
</title> 
    <meta name="viewport" content="width=device-width,initial_scale=1"/> 
    <link href="/ui/style.css" rel="stylesheet" />

</head>

<body>
    <div>
<a href="/"> Home </a>    
<hr/>

</div>
<div class="displayer" style="background-color:lightgreen">
<h2 >

${heading}    
</h2>
<div>
   ${date}
</div>

    <div>
  ${content}
   </div>
</div>
</body>
</html>

    `;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/example-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'example-one.html'));
});


app.get('/example-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'example-two.html'));
});

app.get('/example-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'example-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
