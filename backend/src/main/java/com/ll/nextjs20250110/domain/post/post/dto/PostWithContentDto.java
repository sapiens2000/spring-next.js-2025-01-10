package com.ll.nextjs20250110.domain.post.post.dto;

import com.ll.nextjs20250110.domain.post.post.entity.Post;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import org.springframework.lang.NonNull;

import java.time.LocalDateTime;

@Getter
public class PostWithContentDto {
    @NotNull
    private final long id;

    @NonNull
    private final LocalDateTime createDate;

    @NonNull
    private final LocalDateTime modifyDate;

    @NotNull
    private final long authorId;

    @NonNull
    private final String authorName;

    @NonNull
    private final String title;

    @NonNull
    private final String content;

    @NotNull
    private final boolean published;

    @NotNull
    private final boolean listed;

    public PostWithContentDto(Post post) {
        this.id = post.getId();
        this.createDate = post.getCreateDate();
        this.modifyDate = post.getModifyDate();
        this.authorId = post.getAuthor().getId();
        this.authorName = post.getAuthor().getName();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.published = post.isPublished();
        this.listed = post.isListed();
    }
}
