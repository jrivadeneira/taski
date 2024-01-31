package org.example.taski.repo

import org.example.taski.model.User
import org.springframework.data.repository.reactive.ReactiveCrudRepository

interface UserRepo: ReactiveCrudRepository<User, Long>