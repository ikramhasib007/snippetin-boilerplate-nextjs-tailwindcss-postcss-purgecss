require('./config');

const express = require('express');
const next = require('next');
const _ = require('lodash');
const uuid = require('uuid/v4');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const fetch = require('isomorphic-unfetch');
const { MONGO_URI } = require('./db/mongoose');
const mongoose = require('mongoose');
const { User } = require('./models/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const app = next({dev});
const handle = app.getRequestHandler();
app.prepare()
  .then(() => {
    
    const server = express();

    server.use(helmet());
    server.use(cors({
      credentials: true,
      origin: process.env.CORS_ORIGIN
    }));
    server.use(cookieParser());
    // configure passport.js to use the local strategy
    passport.use(new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('profile: ', profile);
        console.log('refreshToken: ', refreshToken);
        console.log('accessToken: ', accessToken);
      }
    ));

    server.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    }));

    server.get('/auth/google/callback', passport.authenticate('google'));

    passport.use(new LocalStrategy(
      {
        usernameField: 'email',
        passReqToCallback: true
      },
      (req, username, password, done) => {
        console.log('LocalStrategy  >>>>> username: ', username);
        User.findOne({email: username}, (err, user) => {
          // console.log('findOne >>>> user: ', user);
          if(err) {
            return done(err);
          }
          if(!user) { return done(null, false) }
          return done(null, user);
        })
      }
    ));

    // tell passport how to serialize the user
    passport.serializeUser((user, done) => {
      // console.log('Inside serializeUser callback. Customer id is save to the session file store here')
      done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
      // console.log('Inside deserializeUser callback')
      User.findById(id, (err, user) => {
        // console.log('user: ', user);
        done(err, user);
      });
    });

    // add & configure middleware
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());
    server.use(session({
      genid: (req) => uuid(),
      store: new MongoStore({
        // url: MONGO_URI,
        mongooseConnection: mongoose.connection,
        autoRemove: 'interval',
        autoRemoveInterval: 10, // Removes expired sessions every 10 minutes
        collection: 'sessions',
        stringify: false
      }),
      cookie: {
        maxAge: parseInt(process.env.COOKIE_MAXAGE, 10),
        // domain: process.env.COOKIE_DOMAIN
      },
      secret: process.env.SECRET || 'snippetin@2019',
      resave: false,
      saveUninitialized: true,
      name: "sessionId"
    }));
    server.use(passport.initialize());
    server.use(passport.session());

    // Routers begins
    server.get('/users', (req, res) => {
      console.log('req: ', req);
      res.send({user: 'ikramhasib007'})
    });
    
    server.post('/users', (req, res) => {
      const body = _.pick(req.body, ['firstname', 'lastname', 'email', 'username', 'password', 'terms_condition'])
      const user = new User(body);
      user.save().then((result) => {
        res.status(200).send(result);
      }).catch(error => {
        if(error.name === 'ValidationError') {
          return res.status(422).send(error);
        } else if(error.name === 'MongoError' && error.code === 11000) {
          return res.status(406).send({message:'There was a duplicate key error'});
        }
        res.status(400).send(error)
      })
    });

    server.get('/login', (req, res) => {
      const actualPage = '/login';
      app.render(req, res, actualPage, req.params);
    });

    server.post('/login',
      passport.authenticate('local', { failureRedirect: '/signup' }),
      (req, res) => {
        console.log('success: ', req.user);
        console.log('cookie inside the login function', req.headers.cookie);
        // console.log('user: ', req.user);
        res.send(req.user);
        // res.redirect('/');
    });

    server.get('/logout', (req, res) => {
      req.logout();
      res.redirect('/');
    });

    server.get('/signup', (req, res) => {
      // console.log('req: ', req);
      console.log('cookie inside the signup function', req.headers.cookie);
      const actualPage = '/signup';
      app.render(req, res, actualPage, req.params);
    });

    server.get('/', (req, res) => {
      console.log('Time', new Date());
      const actualPage = '/index';
      console.log('req.user: /', req.user);
      const qeuryParams = {};
      app.render(req, res, actualPage, qeuryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(PORT, (err) => {
      if(err) {
        throw err;
      }
      console.log(`server started on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });