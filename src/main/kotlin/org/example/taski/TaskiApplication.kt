package org.example.taski

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TaskiApplication

fun main(args: Array<String>) {
    runApplication<TaskiApplication>(*args)
}
