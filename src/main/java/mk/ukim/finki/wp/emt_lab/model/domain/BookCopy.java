package mk.ukim.finki.wp.emt_lab.model.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import mk.ukim.finki.wp.emt_lab.model.enums.State;

@Entity
@Data
@Getter
@Setter
public class BookCopy extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Enumerated(EnumType.STRING)
    private State state;

    private Boolean isRented = false;

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Boolean getRented() {
        return isRented;
    }

    public void setRented(Boolean rented) {
        isRented = rented;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }
}