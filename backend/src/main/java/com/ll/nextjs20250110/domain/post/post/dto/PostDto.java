package com.ll.nextjs20250110.domain.post.post.dto;

import com.ll.nextjs20250110.domain.post.post.entity.Post;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import org.springframework.lang.NonNull;

import java.time.LocalDateTime;

@Getter
public class PostDto {
    @NotNull
    private long id;

    @NonNull
    private LocalDateTime createDate;

    @NonNull
    private LocalDateTime modifyDate;

    @NotNull
    private long authorId;

    @NonNull
    private String authorName;

    @NonNull
    private String title;

    @NotNull
    private boolean published;

    @NotNull
    private boolean listed;

    public PostDto(Post post) {
        this.id = post.getId();
        this.createDate = post.getCreateDate();
        this.modifyDate = post.getModifyDate();
        this.authorId = post.getAuthor().getId();
        this.authorName = post.getAuthor().getName();
        this.title = post.getTitle();
        this.published = post.isPublished();
        this.listed = post.isListed();
    }
}
