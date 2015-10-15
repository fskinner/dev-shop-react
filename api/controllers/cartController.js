let hired_users = [];

let cartController = {
  get(req, res, next) {
    res.json(hired_users);
  },

  post(req, res) {
    let user = req.body;

    for(let i = 0, len = hired_users.length; i<len; i++){
      if(hired_users[i].id === user.id) {
        hired_users[i].hours += user.hours;
          res.status(200);
          return res.json(user);
      }
    }

    hired_users.push(user);
    res.status(201);
    res.json(user);
  },

  delete(req, res) {
    let id = req.params.id;

    hired_users = hired_users.filter(user => user.id !== id );

    res.sendStatus(200);
  },

  wipe(req, res) {
    hired_users = [];

    res.sendStatus(200);
  }
};

export default cartController;
