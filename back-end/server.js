import express from 'express';
import { get } from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/users', async (req, res) => {
    try {
        const response = await get('https://randomuser.me/api/?results=10&nat=us');
        const users = response.data.results.map(user => ({
            name: `${user.name.first} ${user.name.last}`,
            gender: user.gender,
            location: `${user.location.city}, ${user.location.country}`,
            email: user.email,
            birthdate: user.dob.date,
            picture: user.picture.medium
        }));
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

