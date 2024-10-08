package com.criandoapi.flowerexperience.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.criandoapi.flowerexperience.DAO.ICliente;
import com.criandoapi.flowerexperience.model.Cliente;

@RestController
@CrossOrigin("*")
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ICliente dao;

    @GetMapping
    public ResponseEntity<List<Cliente>> listaClientes() {
        List<Cliente> lista = (List<Cliente>) dao.findAll();
        return ResponseEntity.status(200).body(lista);
    }

    @PostMapping
    public ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente) {
        Cliente clienteNovo = dao.save(cliente);
        return ResponseEntity.status(201).body(clienteNovo);
    }

    @PutMapping
    public ResponseEntity<Cliente> editarCliente(@RequestBody Cliente cliente) {
        Cliente clienteNovo = dao.save(cliente);
        return ResponseEntity.status(201).body(clienteNovo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirCliente(@PathVariable Integer id) {
        dao.deleteById(id);
        return ResponseEntity.status(204).build();
    }

    // Validação da tela de login
    @PostMapping("/login")
    public ResponseEntity<?> loginCliente(@RequestBody Cliente cliente) {

        // Verifica se o cliente existe no banco de dados
        Optional<Cliente> clienteExistente = dao.findByEmailAndSenha(cliente.getEmail(), cliente.getSenha());

        if (clienteExistente.isPresent()) {
            return ResponseEntity.ok(clienteExistente.get());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        }
    }
}
