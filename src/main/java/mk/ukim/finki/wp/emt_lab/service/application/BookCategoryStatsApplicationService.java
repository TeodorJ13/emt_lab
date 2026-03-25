package mk.ukim.finki.wp.emt_lab.service.application;

import mk.ukim.finki.wp.emt_lab.model.dto.DisplayBookCategoryStatsViewDto;

import java.util.List;

public interface BookCategoryStatsApplicationService {
    List<DisplayBookCategoryStatsViewDto> findAll();
}