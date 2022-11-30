package com.apisegura.seguran.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apisegura.seguran.model.Paciente;
import com.apisegura.seguran.service.PacienteService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {

    @Autowired
    private PacienteService servicoPaciente;

    @GetMapping("")
    public List<Paciente> obterTodos(){
        return servicoPaciente.obterTodos();
    }

    @GetMapping("/{id}")
    public Paciente obterPorId(@PathVariable Integer id){
        return servicoPaciente.obterPorId(id);
    }

    @PostMapping("")
    public Paciente adicionar(@RequestBody Paciente paciente){
        return servicoPaciente.adicionar(paciente);
    }

    @PutMapping("/{id}")
    public Paciente atualizar( @PathVariable Integer id, @RequestBody Paciente paciente){
        return servicoPaciente.atulatizar(id, paciente);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id){
        servicoPaciente.deletar(id);
    }
}

    
    

