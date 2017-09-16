package com.qishuang.com.qishuang.domain.repository;

import com.qishuang.com.qishuang.domain.Article;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by geek720 on 2017/9/10.
 */
public interface ArticleRepository extends MongoRepository<Article, String> {

}
