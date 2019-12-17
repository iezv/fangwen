package com.sefel.dao;

import com.sefel.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ItemRepository extends JpaRepository<Item, Long> {

}
