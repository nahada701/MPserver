const jsonServer=require('json-server')

// we are creating server for our app

const Mpserver=jsonServer.create()
//creating middleware
const middleware=jsonServer.defaults()
// creating route
const route=jsonServer.router('db.json')
//port setting
const PORT=3000 || process.env.PORT

//now tell server to use middleware and route
Mpserver.use(middleware)
Mpserver.use(route)

// to run server listen method (port,function to notify running status)

Mpserver.listen(PORT,()=>{
    console.log(`media player is running at ${PORT} and waiting for client request`);
    
})




