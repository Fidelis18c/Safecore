DROP TABLE IF EXISTS contact_messages;

CREATE TABLE contact_messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT,
  location TEXT,
  phone_code TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
