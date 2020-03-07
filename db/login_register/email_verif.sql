UPDATE user_verif
SET
email_verif = true
WHERE user_id = ${user_id};