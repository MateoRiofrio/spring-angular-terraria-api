package com.example.terrariaapiv1.controllers

import com.example.terrariaapiv1.exception.ResourceNotFoundException
import com.example.terrariaapiv1.model.items.Weapon
import com.example.terrariaapiv1.repository.WeaponRepository
import org.springframework.data.domain.Sort
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1")
class WeaponsController(private val weaponRepository: WeaponRepository) {
    /**
     * Mapping of 'api/v1/weapons' returns all, or sorts by field in ascending or descending order
     * Params:
     *  sort_by -> field from Weapon type to sort by
     *  order -> 'ORDER BY' direction
     * Default Behavior: All weapons by id in ascending order
     */
    @GetMapping("/weapons")
    fun sortByFieldOrderBy(
        @RequestParam(value = "sort_by", defaultValue = "id") field: String,
        @RequestParam(value = "order", defaultValue = "asc") order: String
    ): ResponseEntity<List<Weapon>> {
        val item = when (order) {
            "asc" -> weaponRepository.findWeaponsBy(Sort.by(Sort.Direction.ASC, field))
            "desc" -> weaponRepository.findWeaponsBy(Sort.by(Sort.Direction.DESC, field))
            else -> throw ResourceNotFoundException("Weapon", "sort", order)
        }
        return ResponseEntity.ok(item)
    }

    // Get a weapon by name
    @GetMapping("weapons/item_name/{name}")
    fun getByItemName(@PathVariable name: String): ResponseEntity<List<Weapon>> {
        return ResponseEntity.ok(weaponRepository.findByItemName(name))
    }

    // Get a weapon from a LIKE query (must provide 'like' parameter)
    @GetMapping("weapons/item_name")
    fun getItemByLike(@RequestParam(required = true, value = "like") like: String): ResponseEntity<List<Weapon>> {
        return ResponseEntity.ok(weaponRepository.findByItemNameStartsWith(like))
    }

}