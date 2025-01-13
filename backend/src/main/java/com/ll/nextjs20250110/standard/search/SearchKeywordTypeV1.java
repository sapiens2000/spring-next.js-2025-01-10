package com.ll.nextjs20250110.standard.search;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum SearchKeywordTypeV1 {
    title("title"),
    content("content");

    private final String value;
}