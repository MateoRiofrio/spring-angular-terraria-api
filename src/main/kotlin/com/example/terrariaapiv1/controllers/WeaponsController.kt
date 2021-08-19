package com.example.terrariaapiv1.controllers

import com.example.terrariaapiv1.exception.ResourceNotFoundException
import com.example.terrariaapiv1.model.items.Weapon
import com.example.terrariaapiv1.repository.WeaponRepository
import org.springframework.data.domain.Sort
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/weapons")
class WeaponsController(private val weaponRepository: WeaponRepository) {
    /**
     * Mapping of 'api/weapons' returns all, or sorts by field in ascending or descending order
     * Params:
     *  sort_by -> field from Weapon type
     *  order -> 'ORDER BY' direction
     * Default Behavior: All weapons by id in ascending order
     */
    @GetMapping
    fun sortByFieldOrderBy(
        @RequestParam(value = "sort_by", defaultValue = "id") field: String,
        @RequestParam(value = "order", defaultValue = "asc") order: String
    ): ResponseEntity<List<Weapon>>  {
        val item = when (order) {
            "asc" -> weaponRepository.findWeaponsBy(Sort.by(Sort.Direction.ASC, field))
            "desc" -> weaponRepository.findWeaponsBy(Sort.by(Sort.Direction.DESC, field))
            else -> throw ResourceNotFoundException("Weapon", "sort", order)
        }
        return ResponseEntity.ok(item)
    }
    // Get a weapon by name
    @GetMapping("/{name}")
    fun getByItemName(@PathVariable name: String): ResponseEntity<Weapon> {
        return ResponseEntity.ok(weaponRepository.findByItemName(name))
    }

}