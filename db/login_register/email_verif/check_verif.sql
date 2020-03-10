SELECT email_verif, user_id
FROM user_verif
WHERE email = $1;