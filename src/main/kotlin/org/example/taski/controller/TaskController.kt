package org.example.taski.controller;
import org.example.taski.model.Task
import org.example.taski.model.TaskRequest
import org.example.taski.model.TaskUpdateRequest
import org.example.taski.services.TaskService
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.sql.Timestamp

@RestController
@RequestMapping("/t")
class TaskController (
        private val taskService: TaskService
){
    @CrossOrigin
    @GetMapping("/tasks")
    fun getAllTasks(): Flux<Task> = taskService.getAll().filter { !it.archived }

    @CrossOrigin
    @GetMapping("/archived-tasks")
    fun getArchivedTasks(): Flux<Task> = taskService.getAll().filter { it.archived }

    @CrossOrigin
    @GetMapping("/task/{id}")
    fun getTask(@PathVariable id: Long): Mono<Task> = taskService.getTask(id)

    @CrossOrigin
    @PostMapping("/create-task")
    fun createTask(@RequestBody request: TaskRequest) : Mono<Task> {
        val task = Task(
                title = request.title,
                createdBy = request.createdBy,
                assignedTo = request.assignedTo,
                description = request.description,
                status = request.status,
                createdDate = Timestamp(System.currentTimeMillis()).toString().substring(0,16),
                dueDate = request.dueDate,
                category = request.category,
                archived = request.archived
        )
        return taskService.createTask(task)
    }

    @CrossOrigin
    @PostMapping("/update-task")
    fun updateTask(@RequestBody request: TaskUpdateRequest) : Mono<Task>{
        val id = request.id
        val task = Task(
                id = id.toLong(),
                title = request.title,
                createdBy = request.createdBy,
                assignedTo = request.assignedTo,
                description = request.description,
                status = request.status,
                dueDate = request.dueDate,
                createdDate = request.createdDate,
                category = request.category,
                archived = request.archived
        )
        return taskService.updateTask(task)
    }
}
