package org.example.taski.repo

import org.example.taski.model.User
import org.springframework.data.repository.reactive.ReactiveCrudRepository
import reactor.core.publisher.Mono

interface UserRepo: ReactiveCrudRepository<User, Long> {
    fun findByUsername(username: String): Mono<User>
}