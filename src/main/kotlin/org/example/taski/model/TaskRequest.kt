package org.example.taski.model

data class TaskRequest(
        val title: String,
        val createdBy: String,
        val assignedTo: String,
        val description: String,
        val status: String,
        val dueDate: String,
        val category: String,
        val archived: Boolean = false
)

data class TaskUpdateRequest(
        val id: String,
        val title: String,
        val createdBy: String,
        val assignedTo: String,
        val description: String,
        val status: String,
        val dueDate: String,
        val createdDate: String,
        val category: String,
        val archived: Boolean = false
)
