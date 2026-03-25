package mk.ukim.finki.wp.emt_lab.service.application;

import mk.ukim.finki.wp.emt_lab.model.domain.ActivityLog;
import org.springframework.data.domain.Page;

public interface ActivityLogApplicationService {
    Page<ActivityLog> findAll(int page, int size);
}