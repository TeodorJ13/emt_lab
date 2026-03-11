insert into countries (id, name, continent) values
                                                (1, 'Germany', 'Europe'),
                                                (2, 'Russia', 'Europe'),
                                                (3, 'Macedonia', 'Europe'),
                                                (4, 'Spain', 'Europe');

insert into authors (id, created_at, updated_at, name, surname, country_id) values
                                                                                (1, now(), now(), 'Johann', 'Goethe', 2),
                                                                                (2, now(), now(), 'Fyodor', 'Dostoevsky', 4),
                                                                                (3, now(), now(), 'Risto', 'Krle', 3),
                                                                                (4, now(), now(), 'Miguel', 'Cervantes', 1);

insert into books (id, created_at, updated_at, name, category, author_id, state, available_copies) values
                                                                                                       (1, now(), now(), 'Faust', 'CLASSICS', 1, 'GOOD', 5),
                                                                                                       (2, now(), now(), 'Crime and Punishment', 'NOVEL', 2, 'GOOD', 3),
                                                                                                       (3, now(), now(), 'Money is a Murderer', 'NOVEL', 3, 'GOOD', 2),
                                                                                                       (4, now(), now(), 'Don Quixote', 'CLASSICS', 4, 'BAD', 0);