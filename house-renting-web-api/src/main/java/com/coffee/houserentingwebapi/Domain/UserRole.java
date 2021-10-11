package com.coffee.houserentingwebapi.Domain;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private EntryRole name;

    public UserRole() {

    }

    public UserRole(EntryRole name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public EntryRole getName() {
        return name;
    }

    public void setName(EntryRole name) {
        this.name = name;
    }
}
