package mk.ukim.finki.wp.emt_lab.service.application.impl;

import mk.ukim.finki.wp.emt_lab.model.domain.ActivityLog;
import mk.ukim.finki.wp.emt_lab.repository.ActivityLogRepository;
import mk.ukim.finki.wp.emt_lab.service.application.ActivityLogApplicationService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ActivityLogApplicationServiceImpl implements ActivityLogApplicationService {

    private final ActivityLogRepository activityLogRepository;

    public ActivityLogApplicationServiceImpl(ActivityLogRepository activityLogRepository) {
        this.activityLogRepository = activityLogRepository;
    }

    @Override
    public Page<ActivityLog> findAll(int page, int size) {
        return activityLogRepository.findAll(PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "eventTime")));
    }
}