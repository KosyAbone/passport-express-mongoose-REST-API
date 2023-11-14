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
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ ...req.body, password: hashedPassword });

    await newUser.save();

    req.login(newUser, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      next();
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { authenticateUser, registerUser };
