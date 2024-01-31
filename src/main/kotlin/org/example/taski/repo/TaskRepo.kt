package org.example.taski.repo

import org.example.taski.model.Task
import org.springframework.data.repository.reactive.ReactiveCrudRepository

interface TaskRepo: ReactiveCrudRepository<Task, Long>
