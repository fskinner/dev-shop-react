let userController = {
  get(req, res, next) {
    const users = initUsers();
    let page = parseInt(req.query.page, 10) || 1;
    let perPage = parseInt(req.query.per_page, 10) || 10;
    let current = (page - 1) * perPage;

    let usersPage = users.slice(current, perPage + current);

    res.json({developers: usersPage, lastPage: perPage + current >= users.length});
  }
};

function initUsers() {
  return [
    {id: 1041, username: 'joao', price: 33, photo: ''},
    {id: 20073, username: 'jorge', price: 41, photo: ''},
    {id: 2248, username: 'pedro', price: 32, photo: ''},
    {id: 4660, username: 'paulo', price: 97, photo: ''},
    {id: 748, username: 'tom', price: 37, photo: ''},
    {id: 10574, username: 'tomas', price: 7,  photo: ''},
    {id: 14319, username: 'thiago', price: 12, photo: ''},
    {id: 145949, username: 'tereza', price: 66, photo: ''},
    {id: 15557, username: 'sofia', price: 75, photo: ''},
    {id: 322, username: 'luke', price: 70, photo: ''},
    {id: 1681405, username: 'maria', price: 34, photo: ''},
    {id: 2823287, username: 'eduarda', price: 40, photo: ''}
  ];
}

export default userController;
