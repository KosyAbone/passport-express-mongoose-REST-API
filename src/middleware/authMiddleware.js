import passport from '../config/passport-config';      
import bcrypt from 'bcrypt';
import User from '../models/userModel';

const authenticateUser = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      next();
    });
  })(req, res, next);
};

const registerUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username});

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ ...req.body, password: hashedPassword });

    await newUser.save();

    req.login(newUser, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' + err });
      }

      next();
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' + err });
  }
};

module.exports = { authenticateUser, registerUser };
