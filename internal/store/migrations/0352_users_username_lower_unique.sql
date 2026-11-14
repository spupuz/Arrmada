-- 0352_users_username_lower_unique: enforce case-insensitive username uniqueness at
-- the database level. The existing idx_users_username_lower (0115) is non-unique to
-- allow legacy case-duplicates to coexist; this migration replaces it with a unique
-- index. Any pre-existing duplicates must be resolved manually before this runs
-- (the app logs them at startup).
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username_lower_unique ON users(lower(username));