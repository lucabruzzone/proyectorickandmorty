const users = require('../utils/users');

function login(req, res) {
    const { email, password } = req.query;
    const user = users.find(us => us.email === email && us.password === password)
    if(user) res.json({access: true})
    else res.status(401).json({access: false})
}
module.exports = login;