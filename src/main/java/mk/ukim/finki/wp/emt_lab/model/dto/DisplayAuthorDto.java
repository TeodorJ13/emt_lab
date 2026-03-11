package mk.ukim.finki.wp.emt_lab.model.dto;

import mk.ukim.finki.wp.emt_lab.model.domain.Author;

public record DisplayAuthorDto(
        Long id,
        String name,
        String surname,
        String countryName
) {
    public static DisplayAuthorDto from(Author author) {
        return new DisplayAuthorDto(
                author.getId(),
                author.getName(),
                author.getSurname(),
                author.getCountry().getName()
        );
    }
}
