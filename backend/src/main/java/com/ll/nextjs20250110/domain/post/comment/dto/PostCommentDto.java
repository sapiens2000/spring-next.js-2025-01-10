package com.ll.nextjs20250110.domain.post.comment.dto;

import com.ll.nextjs20250110.domain.post.comment.entity.PostComment;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import org.springframework.lang.NonNull;

import java.time.LocalDateTime;

@Getter
public class PostCommentDto {
    @NotNull
    private final long id;

    @NonNull
    private final LocalDateTime createDate;

    @NonNull
    private final LocalDateTime modifyDate;

    @NotNull
    private final long postId;

    @NotNull
    private final long authorId;

    @NonNull
    private final String authorName;

    @NonNull
    private final String content;

    public PostCommentDto(PostComment postComment) {
        this.id = postComment.getId();
        this.createDate = postComment.getCreateDate();
        this.modifyDate = postComment.getModifyDate();
        this.postId = postComment.getPost().getId();
        this.authorId = postComment.getAuthor().getId();
        this.authorName = postComment.getAuthor().getName();
        this.content = postComment.getContent();
    }
}

