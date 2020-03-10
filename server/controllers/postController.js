module.exports = {
  makePost: async (req, res) => {
    const db = req.app.get('db');
    const {postcont, user_id, } = req.body;
    const post_id = await db.post.initial_post([postcont, user_id]);
    
  }
}