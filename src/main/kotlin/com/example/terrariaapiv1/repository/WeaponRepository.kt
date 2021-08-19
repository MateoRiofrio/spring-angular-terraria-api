package com.example.terrariaapiv1.repository

import com.example.terrariaapiv1.model.items.Weapon
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface WeaponRepository: JpaRepository<Weapon, Long> {

}