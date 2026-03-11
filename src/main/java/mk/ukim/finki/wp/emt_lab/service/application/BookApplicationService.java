package mk.ukim.finki.wp.emt_lab.service.application;


import mk.ukim.finki.wp.emt_lab.model.dto.CreateBookDto;
import mk.ukim.finki.wp.emt_lab.model.dto.DisplayBookDto;

import java.util.List;
import java.util.Optional;

public interface BookApplicationService {
    List<DisplayBookDto> findAll();

    Optional<DisplayBookDto> findById(Long id);

    DisplayBookDto create(CreateBookDto createBookDTO);

    Optional<DisplayBookDto> update(Long id, CreateBookDto createBookDTO);

    Optional<DisplayBookDto> deleteById(Long id);

    Optional<DisplayBookDto> rent(Long id);
}