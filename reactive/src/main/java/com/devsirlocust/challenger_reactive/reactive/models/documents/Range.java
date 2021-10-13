package com.devsirlocust.challenger_reactive.reactive.models.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class Range {

  @Id
  private String id;

  private Integer init;

  private Integer end;

  private String rangeList;

}
