INSERT INTO users (first_name, last_name, prof_pic)
VALUES
(${first_name}, ${last_name}, ${prof_pic})
returning *;