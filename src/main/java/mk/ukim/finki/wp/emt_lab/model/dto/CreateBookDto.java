package mk.ukim.finki.wp.emt_lab.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import mk.ukim.finki.wp.emt_lab.model.domain.Author;
import mk.ukim.finki.wp.emt_lab.model.domain.Book;
import mk.ukim.finki.wp.emt_lab.model.enums.Category;
import mk.ukim.finki.wp.emt_lab.model.enums.State;
import java.time.LocalDateTime;

public record CreateBookDto(
        @NotBlank(message = "Book name is required")
        String name,

        @NotNull(message = "Category is required")
        Category category,

        @NotNull(message = "State is required")
        State state,

        @NotNull(message = "Author is required")
        Long authorId,
        LocalDateTime date_published
) {
    public Book toBook(Author author) {
        return new Book(name, category, state, date_published,author);
    }
}