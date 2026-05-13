package mk.ukim.finki.wp.emt_lab.model.dto;

import mk.ukim.finki.wp.emt_lab.model.domain.Country;

public record DisplayCountryDto(
        Long id,
        String name,
        String continent
) {
    public static DisplayCountryDto from(Country country) {
        return new DisplayCountryDto(
                country.getId(),
                country.getName(),
                country.getContinent()
        );
    }
}
