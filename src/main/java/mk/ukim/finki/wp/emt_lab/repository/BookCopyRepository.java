//package mk.ukim.finki.wp.emt_lab.repository;
//
//import mk.ukim.finki.wp.emt_lab.model.domain.Book;
//import mk.ukim.finki.wp.emt_lab.model.domain.BookCopy;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.Optional;
//
//@Repository
//public interface BookCopyRepository extends JpaRepository {
//
//    Optional findFirstByBookAndIsRentedFalse(Book book);
//}

package mk.ukim.finki.wp.emt_lab.repository;

import mk.ukim.finki.wp.emt_lab.model.domain.Book;
import mk.ukim.finki.wp.emt_lab.model.domain.BookCopy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookCopyRepository extends JpaRepository<BookCopy, Long> {

    Optional<BookCopy> findFirstByBookAndIsRentedFalse(Book book);
}