import express from 'express';
import {Book,User} from '../../../db/models';
import checkAuthor from '../../customMiddlewares/authorMiddleware';

const router = express.Router();

router.post('/books', async (req, res) => {
  const {bookName, description, img} = req.body;
  if(!bookName || !description || !img){
    return res.status(400).json({message: 'Запольни все поля!'});
  }
  await Book.create({...req.body, userId: req.session.user.id});
  const newBook = await Book.findOne({where:{userId: req.session.user.id}, include: User});
  return res.json(newBook);
})

router.delete('/books/:id', checkAuthor,async (req, res) => {
  try{
    const book = await Book.findByPk(req.params.id);
    if(!book){
      return res.status(404).send('Post not found');
    }
    await book.destroy();
    return res.json({message: 'Post deleted'});
  }catch(err){
    console.log(err);
    return res.status(500).send('Server error');
  }
  })

router.patch('/books/:id', checkAuthor, async (req, res) => {
  try {
    await Book.update(req.body, { where: { id:req.params.id } });
  res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: 'не верный id' });
  }
});

export default router;
