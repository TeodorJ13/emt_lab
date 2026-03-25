package mk.ukim.finki.wp.emt_lab.repository;

import mk.ukim.finki.wp.emt_lab.model.views.BookCategoryStatsView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookCategoryStatsViewRepository extends JpaRepository<BookCategoryStatsView, String> {

    @Modifying
    @Query(value = "call refresh_book_category_stats()", nativeQuery = true)
    void refresh();
}