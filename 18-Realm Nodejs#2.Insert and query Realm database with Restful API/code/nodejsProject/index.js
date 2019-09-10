/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Root file for nodejs's project
*/
const { app } = require('./express/expressApp')
const port = 3000
app.set('port', process.env.PORT || port)
app.listen(port, () => console.log(`Express app is listening on port ${port}`))
