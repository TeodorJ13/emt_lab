package mk.ukim.finki.wp.emt_lab.service.application;

import mk.ukim.finki.wp.emt_lab.model.dto.LoginUserRequestDto;
import mk.ukim.finki.wp.emt_lab.model.dto.LoginUserResponseDto;
import mk.ukim.finki.wp.emt_lab.model.dto.RegisterUserRequestDto;
import mk.ukim.finki.wp.emt_lab.model.dto.RegisterUserResponseDto;

import java.util.Optional;

public interface UserApplicationService {
    Optional<RegisterUserResponseDto> register(RegisterUserRequestDto registerUserRequestDto);

    Optional<LoginUserResponseDto> login(LoginUserRequestDto loginUserRequestDto);

    Optional<RegisterUserResponseDto> findByUsername(String username);
}
