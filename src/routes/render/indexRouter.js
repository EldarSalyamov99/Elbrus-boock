import express from 'express';
import {Book,User} from '../../../db/models';
// import userCheck from '../../customMiddlewares/userMiddleware';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const books = await Book.findAll({include: User});
  res.render('Layout',{books});
});

indexRouter.get('/addBook',  (req, res) => {
  if(!req.session.user){
    return res.send('Kuda ti')
  }
  return res.render('Layout')
})
indexRouter.get('/signup',  (req, res) => {
  if(req.session.user){
    return res.send('Kuda ti')
  }
  return res.render('Layout')
});

indexRouter.get('/login', (req, res) => {
  if(req.session.user){
    return res.send('Kuda ti')
  }
  return res.render('Layout')
});

indexRouter.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findOne({ where: { id } });
  res.render('Layout', { book });
})

// postRouter.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const post = await Post.findOne({ where: { id } });
//   res.render('Layout', { post });
// });

export default indexRouter;
