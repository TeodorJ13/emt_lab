INSERT INTO users (created_at, updated_at, name, surname, email, username, password, role)
SELECT now(), now(), 'Admin', 'Admin', 'admin@admin.com', 'admin', 'admin', 'ROLE_ADMINISTRATOR'
    WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'admin');