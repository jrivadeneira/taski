package org.example.taski.services

import org.example.taski.model.Task
import org.example.taski.repo.TaskRepo
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class TaskService (
        private val taskRepo: TaskRepo
){
    fun getAll() : Flux<Task> = taskRepo.findAll()

    fun getTask(id: Long) : Mono<Task> = taskRepo.findById(id).switchIfEmpty(
            Mono.error(RuntimeException("Task with id $id not found"))
    )

    fun createTask(task: Task) : Mono<Task> = taskRepo.save(task)

    fun updateTask(task: Task) : Mono<Task> = taskRepo.save(task)
}