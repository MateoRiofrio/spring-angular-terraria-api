package com.example.terrariaapiv1

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication
class TerrariaApiV1Application

fun main(args: Array<String>) {
    runApplication<TerrariaApiV1Application>(*args)
}
