package mk.ukim.finki.wp.emt_lab.service.domain;

import mk.ukim.finki.wp.emt_lab.model.views.BookView;

import java.util.List;

public interface BookViewService  {
    List<BookView> findAll();
}