package org.example.taski.model

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table
import java.sql.Timestamp

@Table("tasks")
data class Task(
        @Id val id: Long? = null,
        val title: String,
        val createdBy: String,
        val assignedTo: String,
        val description: String,
        val status: String,
        val createdDate: String,
        val dueDate: String,
        val category: String,
        val archived: Boolean = false
)
