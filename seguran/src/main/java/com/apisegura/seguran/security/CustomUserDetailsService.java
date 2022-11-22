package com.apisegura.seguran.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.stereotype.Service;


import com.apisegura.seguran.repository.UsuarioRepository;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    // @Autowired
    // private UsuarioService usuarioService;
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {
        // Usuario usuario = getUser(() -> usuarioService.obterPorEmail(email));
        // return usuario;
        return usuarioRepository.findByEmail(email).get();
    }

    public UserDetails obterUsuarioPorId(long id) {
        return usuarioRepository.findById(id).get();
    }

    // private Usuario getUser(Supplier<Optional<Usuario>> supplier){
    //     return supplier.get().orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));
    // }
    
}

