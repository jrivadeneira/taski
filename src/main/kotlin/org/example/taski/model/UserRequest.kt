package org.example.taski.model

data class UserRequest (
        val username: String,
        val tasksCompleted: Int = 0,
        )

data class UserUpdateRequest (
        val id: String,
        val username: String,
        val tasksCompleted: Int = 0,
        )

data class SignInRequest (
        val username: String,
//        val password: String
        )