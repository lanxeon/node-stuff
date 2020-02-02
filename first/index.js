const http=require('http');

const server=http.createServer((req,res)=>{
	const { url } = req;
	res.setHeader('content-type', 'text/html');
	if(url==='/info')
	{
	const info={1:"one",2:"two",3:"three"};
	res.write('<h3><font color=\'blue\'>'+JSON.stringify(info)+'</font></h3>');
	res.end();
	}
	res.end('<h3><font color=\'blue\'>'+"MY FIRST NODE APPLICATION!!!!"+'</font></h3>')
	console.log(url);
});

const port=3000; //good practice
const serverName='localhost';//good practice

server.listen(3000,'localhost',()=>{
	console.log(`Running at ${serverName}:${port}`);
	//console.log("nigga\nIs newline working?\nmaybe")
});