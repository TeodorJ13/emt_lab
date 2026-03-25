package mk.ukim.finki.wp.emt_lab.service.application;

import mk.ukim.finki.wp.emt_lab.model.dto.CreateBookDto;
import mk.ukim.finki.wp.emt_lab.model.dto.DisplayBookDto;
import mk.ukim.finki.wp.emt_lab.model.enums.Category;
import mk.ukim.finki.wp.emt_lab.model.enums.State;
import mk.ukim.finki.wp.emt_lab.model.projection.BookDetailedProjection;
import mk.ukim.finki.wp.emt_lab.model.projection.BookSummaryProjection;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface BookApplicationService {
    List<DisplayBookDto>findTop10ByDate(LocalDateTime localDateTime);
    List<DisplayBookDto> findAll();
    Optional<DisplayBookDto> findById(Long id);
    DisplayBookDto create(CreateBookDto createBookDTO);
    Optional<DisplayBookDto> update(Long id, CreateBookDto createBookDTO);
    Optional<DisplayBookDto> deleteById(Long id);
    List<DisplayBookDto> findByCategory(Category category);
    Page<DisplayBookDto> findAll(int page, int size, String sortBy);
    Page<DisplayBookDto> filter(Category category, State state, Long authorId, Boolean available, int page, int size, String sortBy);
    Page<BookSummaryProjection> findAllSummary(int page, int size, String sortBy);
    List<DisplayBookDto> findAllWithAuthorAndCountry();
    Optional<DisplayBookDto> rent(Long id);
    Page<BookDetailedProjection> findAllDetailed(int page, int size, String sortBy);
}
