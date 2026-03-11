package mk.ukim.finki.wp.emt_lab.service.domain;

import mk.ukim.finki.wp.emt_lab.model.domain.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> findAll();

    Optional<Book> findById(Long id);

    Book create(Book book);

    Optional<Book> update(Long id, Book book);

    Optional<Book> deleteById(Long id);

    Optional<Book> rent(Long id);
}