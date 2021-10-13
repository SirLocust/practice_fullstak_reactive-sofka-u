package com.devsirlocust.challenger_reactive.reactive.controllers;

import java.util.Collections;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import com.devsirlocust.challenger_reactive.reactive.models.documents.Range;
import com.devsirlocust.challenger_reactive.reactive.models.dto.RequestRangeDTO;
import com.devsirlocust.challenger_reactive.reactive.repositories.RangeRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import reactor.core.publisher.Mono;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(value = "/range")

@AllArgsConstructor

public class RangeController {

  private final RangeRepository rangeRepository;

  @PostMapping(value = "")
  public Mono<Range> postMethodName(@RequestBody RequestRangeDTO requestRangeDTO) {
    return Mono.just(new Range()).map(range -> {
      range.setInit(requestRangeDTO.getInit());
      range.setEnd(requestRangeDTO.getEnd());
      return range;
    }).map(random -> {
      var list = IntStream.range(random.getInit(), random.getEnd() + 1).boxed().collect(Collectors.toList());
      Collections.shuffle(list);
      var randomList = list.stream().map(num -> String.valueOf(num)).collect(Collectors.joining(","));
      random.setRangeList(randomList);
      return random;
    }).flatMap(rangeRepository::save);
  }

}
