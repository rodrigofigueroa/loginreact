const express = require( 'express' )
const cors    = require( 'cors' )
const app     = express()

app.use( cors() )

app.use( '/login/', function( req, res, next ){
  res.send({
    token: 'test123'
  })
})

app.listen( 
  8080, 
  () => console.log( 'API is running in http://localhost:8080/login')
)