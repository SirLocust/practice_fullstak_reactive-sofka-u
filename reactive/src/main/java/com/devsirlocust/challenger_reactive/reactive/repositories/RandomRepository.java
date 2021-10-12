package com.devsirlocust.challenger_reactive.reactive.repositories;

import com.devsirlocust.challenger_reactive.reactive.models.Random;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface RandomRepository extends ReactiveCrudRepository<Random, String> {

}
