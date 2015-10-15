import request from 'request';

let orgController = {
  get(req, res) {
    let page = parseInt(req.query.page, 10) || 1;
    let per_page = parseInt(req.query.per_page, 10) || 10;

    let { org } = req.params;

    const opt = {
      headers: {
        'Accept': 'application/vnd.github.moondragon+json',
        'User-Agent': 'fskinner'
      },
      url: `https://api.github.com/orgs/${org}/members?page=${page}&per_page=${per_page}`
    };

    request.get(opt, function (err, response) {
      if(err) return res.sendStatus(500);

      let devs = JSON.parse(response.body);

      if(devs.constructor !== Array) devs = [];
      const users = devs.map( dev => {
        return {
          id: dev.id,
          username : dev.login,
          photo : dev.avatar_url,
          price : (dev.login.length * 13 * dev.login.length)/4
        }
      })

      let isLastPage;
      if(users.length > 0) isLastPage = parseLastPage(page, response.headers.link);
      else isLastPage = true;

      res.json({developers: users, lastPage: isLastPage});
    });
  }
};

function parseLastPage(currentPage, url) {
  if(!url) return true;

  url = url.split('<')[2].split('>')[0];
  let params = url.split('?')[1];
  let lastPage = params.split('&')[0].split('=')[1];

  return currentPage >= lastPage;
}

export default orgController;
