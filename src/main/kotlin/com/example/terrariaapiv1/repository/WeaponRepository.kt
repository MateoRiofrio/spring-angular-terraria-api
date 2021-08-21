package com.example.terrariaapiv1.repository

import com.example.terrariaapiv1.model.items.Weapon
import org.springframework.data.domain.Sort
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface WeaponRepository: JpaRepository<Weapon, Long> {
    fun findByItemName(itemName: String): List<Weapon>
    fun findWeaponsBy(sort: Sort): List<Weapon> // note: Sort contains the field to use
    fun findByItemNameStartsWith(itemName: String): List<Weapon>
}