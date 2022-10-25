
function myLogger (req, res, next){
    console.log(req);
    console.log(res);
    next();
}

module.exports = myLogger;