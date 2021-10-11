package com.coffee.houserentingwebapi.repository;
import java.util.Optional;

import com.coffee.houserentingwebapi.Domain.EntryRole;
import com.coffee.houserentingwebapi.Domain.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<UserRole, Long> {
    Optional<UserRole> findByName(EntryRole name);
}
