package mk.ukim.finki.wp.emt_lab.repository;

import mk.ukim.finki.wp.emt_lab.model.views.BookView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookViewRepository extends JpaRepository<BookView, Long> {
}