package org.example.taski.controller

import org.example.taski.model.User
import org.example.taski.model.UserRequest
import org.example.taski.services.UserService
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/u")
class UserController
(
        private val userService: UserService
) {
    @CrossOrigin
    @GetMapping("/users")
    fun getAllUsers(): Flux<User> = userService.getAll()

    @CrossOrigin
    @GetMapping("/user/{id}")
    fun getUserById(@PathVariable id: Long): Mono<User> = userService.getUserById(id)

    @CrossOrigin
    @PostMapping("/create-user")
    fun createUser(@RequestBody user: UserRequest): Mono<User> {
        val newUser = User(
                username = user.username,
                tasksCompleted = user.tasksCompleted
        )
        return userService.createUser(newUser)
    }
}