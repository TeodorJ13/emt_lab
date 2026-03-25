package mk.ukim.finki.wp.emt_lab.service.domain.impl;

import mk.ukim.finki.wp.emt_lab.model.views.BookCategoryStatsView;
import mk.ukim.finki.wp.emt_lab.repository.BookCategoryStatsViewRepository;
import mk.ukim.finki.wp.emt_lab.service.domain.BookCategoryStatsViewService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookCategoryStatsViewServiceImpl implements BookCategoryStatsViewService {
    private final BookCategoryStatsViewRepository bookCategoryStatsViewRepository;

    public BookCategoryStatsViewServiceImpl(BookCategoryStatsViewRepository bookCategoryStatsViewRepository) {
        this.bookCategoryStatsViewRepository = bookCategoryStatsViewRepository;
    }

    @Override
    public List<BookCategoryStatsView> findAll() {
        return bookCategoryStatsViewRepository.findAll();
    }
}