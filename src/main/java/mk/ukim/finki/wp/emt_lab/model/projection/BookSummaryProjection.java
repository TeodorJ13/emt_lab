package mk.ukim.finki.wp.emt_lab.model.projection;

import mk.ukim.finki.wp.emt_lab.model.enums.Category;
import mk.ukim.finki.wp.emt_lab.model.enums.State;

public interface BookSummaryProjection {
    Long getId();
    String getName();
    Category getCategory();
    State getState();
    long getAvailableCopies();
}