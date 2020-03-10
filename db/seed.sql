/ / USER TABLES \ \

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(25),
  last_name VARCHAR(35),
  prof_pic TEXT
);
CREATE TABLE user_verif (
  verif_id SERIAL PRIMARY KEY,
  email VARCHAR(60),
  email_verif BOOL,
  is_admin BOOL,
  user_id INT REFERENCES users(user_id)
);
CREATE TABLE user_info (
  info_id SERIAL PRIMARY KEY,
  cover_pic TEXT,
  bio VARCHAR,
  user_id INT REFERENCES users(user_id)
);
CREATE TABLE user_hash (
  hash_id SERIAL PRIMARY KEY,
  hash TEXT,
  user_id INT REFERENCES users(user_id)
);
CREATE TABLE friends (
  friend_row_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  friend_id INT REFERENCES users(user_id)
);
CREATE TABLE albums (
  album_id SERIAL PRIMARY KEY,
  album_name VARCHAR(25),
  user_id INT REFERENCES users(user_id)
);
CREATE TABLE album_img (
  album_img_id SERIAL PRIMARY KEY,
  album_img TEXT,
  album_id INT REFERENCES albums(album_id)
);

/ / POST TABLES \ \

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  postcont TEXT,
  post_time TIMESTAMPTZ,
  user_id INT REFERENCES users(user_id)
);
CREATE TABLE post_img (
  post_img_id SERIAL PRIMARY KEY,
  img TEXT,
  post_id INT REFERENCES posts(post_id)
);

/ / COMMENT TABLES \ \

CREATE TABLE comments (
  com_id SERIAL PRIMARY KEY,
  com_cont TEXT,
  post_time TIMESTAMPTZ,
  post_id INT REFERENCES posts(post_id),
  user_id INT REFERENCES users(user_id)
);
CREATE TABLE comment_img (
  comment_img_id SERIAL PRIMARY KEY,
  img TEXT,
  com_id INT REFERENCES comments(com_id)
);

/ / CHAT TABLES \ \

CREATE TABLE chat (
  chat_id SERIAL PRIMARY KEY,
  title VARCHAR(50)
);
CREATE TABLE chat_message (
  message_id SERIAL PRIMARY KEY,
  chat_cont TEXT,
  post_time TIMESTAMPTZ,
  user_id INT REFERENCES users(user_id),
  chat_id INT REFERENCES chat(chat_id)
);
CREATE TABLE message_img (
  message_img_id SERIAL PRIMARY KEY,
  img TEXT,
  message_id INT REFERENCES chat_message(message_id)
);
CREATE TABLE user_chat (
  user_chat_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  chat_id INT REFERENCES chat(chat_id)
);