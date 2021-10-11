package com.coffee.houserentingwebapi.Domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(	name = "houses")
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String h_location;

    @NotNull
    private double h_price;

    private Boolean h_status =Boolean.TRUE;

    @NotBlank
    private String h_details;

    public House() {
    }

    public House(String h_location, double h_price, Boolean h_status, String h_details) {
        this.h_location = h_location;
        this.h_price = h_price;
        this.h_status = h_status;
        this.h_details = h_details;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getH_location() {
        return h_location;
    }

    public void setH_location(String h_location) {
        this.h_location = h_location;
    }

    public double getH_price() {
        return h_price;
    }

    public void setH_price(double h_price) {
        this.h_price = h_price;
    }

    public Boolean getH_status() {
        return h_status;
    }

    public void setH_status(Boolean h_status) {
        this.h_status = h_status;
    }

    public String getH_details() {
        return h_details;
    }

    public void setH_details(String h_details) {
        this.h_details = h_details;
    }
}


