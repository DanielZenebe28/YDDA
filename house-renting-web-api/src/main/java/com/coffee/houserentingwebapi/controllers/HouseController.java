package com.coffee.houserentingwebapi.controllers;

import com.coffee.houserentingwebapi.Domain.House;
import com.coffee.houserentingwebapi.exception.ResourceNotFoundException;
import com.coffee.houserentingwebapi.repository.HouseRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/house")
public class HouseController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    HouseRepositery houseRepositery;

    // get all house list
    @GetMapping("/houses")
    public List<House> getAllHouse(){
        return houseRepositery.findAll();
    }

    // create house rest api
    @PostMapping("/houses")
    public House createHouse(@RequestBody House house) {
        return houseRepositery.save(house);
    }

    // get house by id rest api
    @GetMapping("/houses/{id}")
    public ResponseEntity<House> getHouseById(@PathVariable Long id) {
        House house = houseRepositery.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("House not exist with id :" + id));
        return ResponseEntity.ok(house);
    }

    // update house rest api

    @PutMapping("/houses/{id}")
    public ResponseEntity<House> updateHouse(@PathVariable Long id, @RequestBody House houseDetails){
        House house = houseRepositery.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("house not exist with id :" + id));

        house.setH_location(houseDetails.getH_location());
        house.setH_details(houseDetails.getH_details());
        house.setH_price(houseDetails.getH_price());
        house.setH_status(houseDetails.getH_status());
        House updatedHouse = houseRepositery.save(house);
        return ResponseEntity.ok(updatedHouse);
    }

    // delete house rest api
    @DeleteMapping("/houses/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteHouses(@PathVariable Long id){
        House house = houseRepositery.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("house not exist with id :" + id));

        houseRepositery.delete(house);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
