import {Book} from '../../db/models';

export default async function checkAuthor(req, res, next) {
    const {id} = req.params;
    const targetPost = await Book.findOne({where: {id}});
    if (targetPost.userId === req.session?.user?.id) {
        return next();
    }
    return res.sendStatus(403);
}