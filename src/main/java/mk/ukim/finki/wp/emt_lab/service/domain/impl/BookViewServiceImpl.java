package mk.ukim.finki.wp.emt_lab.service.domain.impl;

import mk.ukim.finki.wp.emt_lab.model.views.BookView;
import mk.ukim.finki.wp.emt_lab.repository.BookViewRepository;
import mk.ukim.finki.wp.emt_lab.service.domain.BookViewService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BookViewServiceImpl implements BookViewService {
    private final BookViewRepository bookViewRepository;

    public BookViewServiceImpl(BookViewRepository bookViewRepository) {
        this.bookViewRepository = bookViewRepository;
    }

    @Override
    public List<BookView> findAll() {
        return bookViewRepository.findAll();
    }
}