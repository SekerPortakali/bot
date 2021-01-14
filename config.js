const config = {
    "ownerID": "593192782898659328", //kendi IDınızı yazınız
    "admins": ["593192782898659328"],
    "support": ["593192782898659328"],
    "token": process.env.TOKEN, //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "-IFL4-GzYvq-Sr3bsvWiwsHpE5SeJwVA", //botunuzun secretini yazınız
      "callbackURL": `https://thewolfs-dashboard.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://thewolfs-dashboard.glitch.me/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;