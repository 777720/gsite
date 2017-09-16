package com.qishuang.com.qishuang.domain;

import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * Created by geek720 on 2017/9/10.
 */
public class Article {
    @Id
    private String id;
    private String Title;
    private String content;
    private User author;
    private Date createTime;
    private boolean isTop;
    private boolean isEssence;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public boolean isTop() {
        return isTop;
    }

    public void setTop(boolean top) {
        isTop = top;
    }

    public boolean isEssence() {
        return isEssence;
    }

    public void setEssence(boolean essence) {
        isEssence = essence;
    }

    @Override
    public String toString() {
        return "Article{" +
                "id='" + id + '\'' +
                ", Title='" + Title + '\'' +
                ", content='" + content + '\'' +
                ", author=" + author +
                ", createTime=" + createTime +
                ", isTop=" + isTop +
                ", isEssence=" + isEssence +
                '}';
    }
}
