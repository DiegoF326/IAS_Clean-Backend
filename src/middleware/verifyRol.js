const verifyRol = (allowedRol) => {
    return (req, res, next) => {
        const rolPermitido = allowedRol;
        const rolRecibido = req?.rol;
        if (!rolPermitido || !rolRecibido || rolPermitido !== rolRecibido) {
            return res.sendStatus(401);
        }
        next();
    };
}
export default verifyRol