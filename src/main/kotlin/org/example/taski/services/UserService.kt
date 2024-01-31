package org.example.taski.services

import org.example.taski.model.User
import org.example.taski.repo.UserRepo
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class UserService(
        private val userRepo: UserRepo
) {
    fun getAll(): Flux<User> = userRepo.findAll()

    fun getUserById(id: Long): Mono<User> = userRepo.findById(id).switchIfEmpty(
            Mono.error(RuntimeException("User with id $id not found"))
    )

    fun createUser(user: User): Mono<User> = userRepo.save(user)
}