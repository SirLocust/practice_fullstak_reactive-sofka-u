package com.devsirlocust.challenger_reactive.reactive.repositories;

import com.devsirlocust.challenger_reactive.reactive.models.documents.Range;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface RangeRepository extends ReactiveCrudRepository<Range, String> {

}
