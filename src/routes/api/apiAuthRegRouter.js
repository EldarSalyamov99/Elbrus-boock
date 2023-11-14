import express from 'express';
import bcrypt from 'bcrypt';
import {User, Group, Year} from '../../../db/models';
// import userCheck from '../../middlewares/userMiddlewares';

const router = express.Router();

router.get('/groups', async(req, res) => {
    const groups = await Group.findAll();
    res.json(groups);
})
// router.get('/years', async (req, res) => {
//     const years = await Year.findAll();
//     res.json(years);
// })

router.post('/signup',  async (req, res) => {
    if(req.session.user){
        return res.send('Kuda ti')
    }
    const {name, email, password, group } = req.body;
    console.log(name, email, password, group, );

    const groupObj = await Group.findOne({where: {group}});

    const groupId =groupObj? groupObj.id : null

    if(!name || !email || !password){
        return res.status(400).json({message: 'All fields are required'});
    }
    const hashpass = await bcrypt.hash(password, 10);
    const [user, created] = await User.findOrCreate({
        where: {email},
        defaults: {name,hashpass, groupId}
    });
    if(created){
        req.session.user = {...user.get(), hashpass: undefined}
        return res.sendStatus(201)
    };
    return res.status(400).json({message: 'Email already exists'})
});
// router.post('/signup', async (req, res) => {
//     const { email, name, password, group, year } = req.body;
//     const groups = await Group.findOne({ where: { group } });
//     const years = await Year.findOne({ where: { year } });
//     const groupId = groups.id;
//     const yearId = years.id;
//     const hashPass = await bcrypt.hash(password, 10);
//     const [user, created] = await User.findOrCreate({
//       where: { email },
//       defaults: { hashPass, name, groupId, yearId },
//     });
//     if (!created) {
//       return res.status(400).json({ message: 'Такой email уже существует' });
//     }
//     return res.sendStatus(200);
//   });

router.post('/login', async (req, res) => {
    if(req.session.user){
        return res.send('Kuda ti')
    }
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    if(!user){
        return res.status(400).json({message: 'Email not found'});
    }
    const isCorrect = await bcrypt.compare(password, user.hashpass);
    if(!isCorrect){
        return res.status(400).json({message: 'Incorrect password'});
    }
    req.session.user = {...user.get(), hashpass: undefined};
    return res.sendStatus(201);
})

router.get('/logout',  (req, res) => {
    if(!req.session.user){
        return res.send('Kuda ti')
    }
    req.session.destroy();
    res.clearCookie('user_sid');
    return res.sendStatus(200);
})

// router.patch('/user',  async (req, res) => {
//     const {name, email, password} = req.body;
//     if(!name || !email || !password){
//         return res.status(400).json({message: 'Запольни все поля!'});
//     }
//     await User.update(req.body, {where: {id: req.session.user.id}});
//     const user = await User.findByPk(req.session.user.id);
//     req.session.user = {...user.get(), hashpass: undefined};
//     return res.sendStatus(200);
// })
export default router