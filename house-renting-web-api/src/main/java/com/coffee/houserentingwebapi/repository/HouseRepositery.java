package com.coffee.houserentingwebapi.repository;

import com.coffee.houserentingwebapi.Domain.House;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HouseRepositery extends JpaRepository<House, Long>{
    Optional<House> findById(Long id);
    List<House> findAll();
}
