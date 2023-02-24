const path = require("path");
const express = require("express");
const session = require("express-session");
const exp_hbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//set up handlebars engine with custom helpers (from mini project)
const hbs = exp_hbs.create({helpers});

//new session
const sess = {
    secret: 'secret', //will replace with some hash
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//inform express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log("Now listening on http://localhost:" + PORT + "/"));
});