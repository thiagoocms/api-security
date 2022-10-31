package com.apisegura.seguran.service;

import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apisegura.seguran.model.Paciente;
import com.apisegura.seguran.repository.PacienteRepository;

@Service
public class PacienteService {
    
    @Autowired
    private PacienteRepository repositorioPaciente;

    public List<Paciente> obterTodos(){
        return repositorioPaciente.findAll() ;
    }
    
    public Paciente obterPorId(Integer id){
        Optional<Paciente> p = repositorioPaciente.findById(id);
        if(!p.isPresent()){
            throw new InputMismatchException("Paciente não encontrado com o ID: " + id);
        }
        return p.get();
    }

    public Paciente adicionar(Paciente p){
        p.setId(null);
        return repositorioPaciente.save(p) ; 
    }

    public void deletar(Integer id){
        Optional<Paciente> p = repositorioPaciente.findById(id);

        if(!p.isPresent()){
            throw new InputMismatchException("Não é possível deletar o Paciente com o ID: " + id + " -  não encontrado");
        }
        repositorioPaciente.deleteById(id);
    }
    
    public Paciente atulatizar(Integer id, Paciente p){
        p.setId(id);

        return repositorioPaciente.save(p);
    }
}
