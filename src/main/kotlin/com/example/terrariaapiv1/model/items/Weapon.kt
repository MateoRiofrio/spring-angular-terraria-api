package com.example.terrariaapiv1.model.items

import javax.persistence.*

@Entity
@Table(name="weapons")
class Weapon(
    @Id
    val id: Int? = -1,
    @Column(name="item_name")
    val itemName: String? = null,
    @Column(name="uses_ammo")
    val usesAmmo: String? = null,
    @Column(name="damage")
    val damage: Int? = null,
    @Column(name="knockback")
    val knockback: Double? = 0.0,
    @Column(name="consumable")
    val consumable: Int? = 0,
    @Column(name="critical_chance")
    val criticalChance: String? = null,
    @Column(name="use_time")
    val useTime: Int? = -1,
    @Column(name="velocity")
    val velocity: Double? = 0.0,
    @Column(name="tooltip")
    val toolip: String? = null,
    @Column(name="max_stack")
    val maxStack: Int? = 1,
    @Column(name="rarity")
    val rarity: String? = null,
    @Column(name="buy")
    val buy: Int? = -1,
    @Column(name="sell")
    val sell: Int? = -1,
    @Column(name="research")
    val research: Int? = null,
)