package com.devsirlocust.challenger_reactive.reactive.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "randoms")
@Data
@NoArgsConstructor
public class Random {

  private Date date;

  @Id
  private String id;

  private String originalList;

  private String randomList;

}
