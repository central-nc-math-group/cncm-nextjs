const autoredirect = require("./components/autoredirects.json");

const redirects = () => {
  return autoredirect.map((el) => ({
    source: el.redirect,
    destination: el.link,
    permanent: true,
  }));
};

module.exports = { redirects };
