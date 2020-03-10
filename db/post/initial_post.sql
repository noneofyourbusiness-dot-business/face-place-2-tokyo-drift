INSERT INTO posts (postcont, post_time, user_id)
VALUES ($1, NOW(), $2)
RETURNING post_id;