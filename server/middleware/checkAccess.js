const checkAccess = (permission) => {
  return async (req, res, next) => {
    if (permission.roles.includes(req.user?.role)) return next();
    if (!permission?.owner)
      return res
        .status(401)
        .json({ success: false, message: 'Access denied!' });
    const isOwner = await permission.owner(req);
    if (isOwner === true) return next();
    if (isOwner === false)
      return next();
       
  };
};

export default checkAccess;
