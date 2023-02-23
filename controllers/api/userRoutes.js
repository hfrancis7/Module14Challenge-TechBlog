const router = require('express').Router();
const { User } = require("../../models");

//create new user
router.post("/", async (req, res) => {
    try{
        const userData = await User.create(req.body);
        req.session.save(() => {
            //may need to use name/email and password? see activity 9
            //i also can't find anything with the secrets???
            req.session.user_id = userData.id; //session userid = user's id
            req.session.logged_in = true; //user is logged in

            res.status(200).json(userData);
        });
    } catch(err) {
        res.status(400).json(err); //status 400 = bad request
    }
})

// login
router.post("./login", async (req, res) => {
    try {
        const userData = User.findOne({ where: { email: req.body.email }});

        if(!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again!' }) //status 400 = bad request
            return; //if there is not a user with this email, err
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again!' }) //status 400 = bad request
            return; //if password invalid, err
        }

        //create new session, user is logged in
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        })
    }catch(err) {
        res.status(400).json(err); // 500 used in other activities, 400 used in mini project
    }
});

// logout
router.post("./logout", (req, res) => {
    if(req.session.logged_in) {
        res.session.destroy(() => { //destroy session
            res.status(204).end(); //204 = no content
        });
    } else {
        res.status(404).end(); //404 = content not found
    }
});

module.exports = router;