DROP TABLE IF EXISTS watchlists CASCADE;

CREATE TABLE watchlists (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL,
  crypto_id VARCHAR(255) NOT NULL,
  user_email_cyrpto_id VARCHAR(255) NOT NULL UNIQUE
);