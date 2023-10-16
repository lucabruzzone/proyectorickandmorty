const { User } = require('../DB_connection');

async function deleteUser(req, res) {
    try {
        const { email } = req.query;
        if (!email) res.status(400).json("Faltan datos");
        else {
            const findUser = await User.findOne({ where: { email: email } });
            if (!findUser) throw Error("Usuario no encontrado");
            else {
                await User.destroy({
                    where: {
                        email: email
                    },
                });
            }
            res.json({
                success: "Su cuenta ha sido eliminada"
            });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = deleteUser;