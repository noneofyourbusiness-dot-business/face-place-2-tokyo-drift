select uv.email, uv.user_id, h.hash from user_verif uv
join user_hash h on h.user_id = uv.user_id
where email = ($1);