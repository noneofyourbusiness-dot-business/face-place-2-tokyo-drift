select u.user_id, u.first_name, u.last_name, u.prof_pic, v.is_admin, v.email_verif
from users u
join user_verif v on u.user_id = v.user_id
where v.email = ($1);