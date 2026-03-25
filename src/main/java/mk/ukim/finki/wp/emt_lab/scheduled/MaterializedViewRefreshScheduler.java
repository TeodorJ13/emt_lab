package mk.ukim.finki.wp.emt_lab.scheduled;

import jakarta.transaction.Transactional;
import mk.ukim.finki.wp.emt_lab.repository.BookCategoryStatsViewRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component

public class MaterializedViewRefreshScheduler {

    private final Logger logger = LoggerFactory.getLogger(MaterializedViewRefreshScheduler.class);

    private final BookCategoryStatsViewRepository bookCategoryStatsViewRepository;

    public MaterializedViewRefreshScheduler(BookCategoryStatsViewRepository bookCategoryStatsViewRepository) {
        this.bookCategoryStatsViewRepository = bookCategoryStatsViewRepository;
    }

    @Scheduled(cron = "0 * * * * *")
    @Transactional
    public void refreshBookCategoryStats() {
        logger.info("Starting refresh of book_category_stats materialized view...");
        bookCategoryStatsViewRepository.refresh();
        logger.info("Finished refresh of book_category_stats materialized view.");
    }
}