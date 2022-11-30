package com.apisegura.seguran.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nome;

    private String healthInsuranceCardId;

    private String address;

    private Date createdAt;

    public Paciente() {
    }

    public Paciente(String nome, String healthInsuranceCardId, String address, Date createdAt) {
        this.nome = nome;
        this.healthInsuranceCardId = healthInsuranceCardId;
        this.address = address;
        this.createdAt = createdAt;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getHealthInsuranceCardId() {
        return healthInsuranceCardId;
    }

    public void setHealthInsuranceCardId(String healthInsuranceCardId) {
        this.healthInsuranceCardId = healthInsuranceCardId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    
    
}
