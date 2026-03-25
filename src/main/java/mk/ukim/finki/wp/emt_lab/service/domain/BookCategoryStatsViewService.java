package mk.ukim.finki.wp.emt_lab.service.domain;

import mk.ukim.finki.wp.emt_lab.model.views.BookCategoryStatsView;

import java.util.List;

public interface BookCategoryStatsViewService {
    List<BookCategoryStatsView>findAll();
}