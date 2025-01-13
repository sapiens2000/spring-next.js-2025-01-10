package com.ll.nextjs20250110.standard.page.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;
import org.springframework.lang.NonNull;

import java.util.List;

@Getter
public class PageDto<T> {
    private final int currentPageNumber;

    private final int pageSize;

    private final long totalPages;

    private final long totalItems;

    @NonNull
    private final List<T> items;

    public PageDto(Page<T> page) {
        this.currentPageNumber = page.getNumber() + 1;
        this.pageSize = page.getSize();
        this.totalPages = page.getTotalPages();
        this.totalItems = page.getTotalElements();
        this.items = page.getContent();
    }
}
