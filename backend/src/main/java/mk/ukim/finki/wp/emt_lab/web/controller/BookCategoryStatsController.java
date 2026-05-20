package mk.ukim.finki.wp.emt_lab.web.controller;

import mk.ukim.finki.wp.emt_lab.model.views.BookCategoryStatsView;
import mk.ukim.finki.wp.emt_lab.repository.BookCategoryStatsViewRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/stats")
public class BookCategoryStatsController {

    private final BookCategoryStatsViewRepository bookCategoryStatsViewRepository;

    public BookCategoryStatsController(BookCategoryStatsViewRepository bookCategoryStatsViewRepository) {
        this.bookCategoryStatsViewRepository = bookCategoryStatsViewRepository;
    }

    @GetMapping("/category")
    public ResponseEntity<List<BookCategoryStatsView>> getCategoryStats() {
        return ResponseEntity.ok(bookCategoryStatsViewRepository.findAll());
    }
}