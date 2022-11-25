package com.apisegura.seguran.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apisegura.seguran.model.Usuario;
import com.apisegura.seguran.service.UsuarioService;
import com.apisegura.seguran.view.model.usuario.LoginRequest;
import com.apisegura.seguran.view.model.usuario.LoginResponse;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService servicoUsuario;

    @GetMapping("")
    public List<Usuario> obterTodos(){
        return servicoUsuario.obterTodos();
    }

    @GetMapping("/{id}")
    public Optional<Usuario> obterPorId(@PathVariable Long id){
        return servicoUsuario.obterPorId(id);
    }

    @PostMapping("")
    public Usuario adicionar(@RequestBody Usuario usuario){
        return servicoUsuario.adicionar(usuario);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request){
        return servicoUsuario.logar(request.getEmail(), request.getSenha());
    }
}
