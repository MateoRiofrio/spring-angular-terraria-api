package com.example.terrariaapiv1.exception

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(value = HttpStatus.NOT_FOUND)
class ResourceNotFoundException(
    private val resourceName: String,
    private val fieldName: String,
    private val fieldValue: Any
) : RuntimeException() {

    override fun toString(): String {
        return "$resourceName not found with $fieldName: '$fieldValue'"
    }
}