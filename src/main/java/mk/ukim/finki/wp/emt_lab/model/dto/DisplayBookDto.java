package mk.ukim.finki.wp.emt_lab.model.dto;

import mk.ukim.finki.wp.emt_lab.model.domain.Book;
import mk.ukim.finki.wp.emt_lab.model.enums.Category;
import mk.ukim.finki.wp.emt_lab.model.enums.State;

import java.util.List;

public record DisplayBookDto(
        Long id,
        String name,
        Category category,
        String authorName

) {

    public static DisplayBookDto from(Book book) {
        return new DisplayBookDto(
                book.getId(),
                book.getName(),
                book.getCategory(),
                book.getAuthor().getName() + " " + book.getAuthor().getSurname()
        );
    }

    public static List<DisplayBookDto> from(List<Book> books) {
        return books.stream()
                .map(DisplayBookDto::from)
                .toList();
    }

}