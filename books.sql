DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255)
);

INSERT INTO books (Title, Author) VALUES ('Brave New World', 'Aldous Huxley');
INSERT INTO books (Title, Author) VALUES ('Oryx and Crake', 'Margaret Atwood');
INSERT INTO books (Title, Author) VALUES ('The Timetraveller''s Wife', 'Audrey Niffenegger');
INSERT INTO books (Title, Author) VALUES ('Charlie and the Chocolate Factory', 'Roald Dahl');
INSERT INTO books (Title, Author) VALUES ('The Girl with All the Gifts', 'M R Carey');
INSERT INTO books (Title, Author) VALUES ('Chinese Cinderella', 'Adeline Yen Mah');
INSERT INTO books (Title, Author) VALUES ('Cloud Atlas', 'David Mitchell');
INSERT INTO books (Title, Author) VALUES ('A Clockwork Orange', 'Anthony Burgess');
INSERT INTO books (Title, Author) VALUES ('The Lion, the Witch and the Wardrobe', 'C S Lewis');
INSERT INTO books (Title, Author) VALUES ('1984', 'George Orwell');
