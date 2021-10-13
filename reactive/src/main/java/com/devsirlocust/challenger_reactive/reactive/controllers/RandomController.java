package com.devsirlocust.challenger_reactive.reactive.controllers;

import java.util.Collections;
import java.util.Date;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.devsirlocust.challenger_reactive.reactive.models.Random;
import com.devsirlocust.challenger_reactive.reactive.models.dto.RequestDTO;
import com.devsirlocust.challenger_reactive.reactive.repositories.RandomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
// @CrossOrigin(origins = "")
@RequestMapping(value = "/r")
@AllArgsConstructor
public class RandomController {

  private final RandomRepository randomRepository;

  @PostMapping("")
  public Mono<Random> post(@RequestBody RequestDTO request) {
    return Mono.just(new Random()).map(random -> {
      random.setDate(new Date());
      random.setOriginalList(request.getList());
      return random;
    }).map(random -> {
      var list = Stream.of(request.getList().split(",")).map(String::trim).collect(Collectors.toList());
      Collections.shuffle(list);
      var randomList = list.stream().collect(Collectors.joining(","));
      random.setRandomList(randomList);
      return random;
    }).flatMap(randomRepository::save);
  }

  @GetMapping("")
  public Flux<Random> get() {
    return randomRepository.findAll();
  }

}
