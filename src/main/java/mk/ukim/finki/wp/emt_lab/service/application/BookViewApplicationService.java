package mk.ukim.finki.wp.emt_lab.service.application;

import mk.ukim.finki.wp.emt_lab.model.dto.DisplayBookViewDto;

import java.util.List;

public interface BookViewApplicationService {
    List<DisplayBookViewDto> findAll();
}