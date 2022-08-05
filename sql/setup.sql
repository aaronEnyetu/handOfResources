-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS flowers CASCADE;
DROP TABLE IF EXISTS planets CASCADE;
DROP TABLE IF EXISTS fruits CASCADE;

-----------Flowers Table----------

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

------------Planets Table----------

CREATE TABLE planets (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    radius_miles INT
);

INSERT INTO planets (
    name,
    radius_miles
)

VALUES
('Mercury', 1516),
('Venus', 3760),
('Earth', 3959),
('Mars', 2106),
('Jupiter', 43441),
('Saturn', 36184),
('Uranus', 15759),
('Neptune', 15299),
('Pluto', 738);


------------Fruits Table----------
CREATE TABLE fruits (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type VARCHAR,
    is_edible BOOLEAN
);


INSERT INTO fruits (
    type,
    is_edible
)

VALUES
('Apples', true),
('Apricots', true),
('Coyote Melon', false),
('Firethorn', false),
('Foxhead', false),
('Bananas', true),
('Oranges', true);