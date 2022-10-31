package com.apisegura.seguran.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apisegura.seguran.model.Paciente;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Integer> {
    
}
