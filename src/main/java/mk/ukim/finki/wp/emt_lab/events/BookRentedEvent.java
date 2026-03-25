package mk.ukim.finki.wp.emt_lab.events;

import mk.ukim.finki.wp.emt_lab.model.domain.Book;

public record BookRentedEvent(Book book, long remainingAvailableCopies) {
}