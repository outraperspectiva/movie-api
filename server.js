import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
    secret: 'movie-vault-secret-key-change-this-in-prod',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Mock Database
const users = [
    { id: 1, username: 'admin', password: 'password', name: 'Admin User' },
    { id: 2, username: 'user', password: '123', name: 'Regular User' }
];

// Authentication Middleware
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// Routes

// Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.user = { id: user.id, username: user.username, name: user.name };
        res.json({ message: 'Login successful', user: req.session.user });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Logout
app.post('/api/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Could not log out' });
        }
        res.clearCookie('connect.sid');
        res.json({ message: 'Logout successful' });
    });
});

// Check Session
app.get('/api/me', (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});

// Protected Route Example
app.get('/api/protected', isAuthenticated, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.session.user });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
