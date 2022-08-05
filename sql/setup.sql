-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS flowers CASCADE;

CREATE TABLE flowers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  common_name VARCHAR,
  color VARCHAR,
  num_petals INT
);

INSERT INTO flowers (
  common_name,
  color,
  num_petals
)

VALUES 
('checker bloom', 'pink', 5),
('spring madia', 'gold, red, brown', 30),
('fawn lily', 'pale yellow', 6),
('columbine', 'pink, red, yellow,  purple', 5),
('cornflower', 'blue, pink, purple, white', 16)
;

