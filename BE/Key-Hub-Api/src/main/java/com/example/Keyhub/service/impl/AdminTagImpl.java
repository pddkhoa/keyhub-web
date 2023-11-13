package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.TagRequestDTO;
import com.example.Keyhub.data.dto.response.TagDTO;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.Tag;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.ICategoryRepository;
import com.example.Keyhub.data.repository.ITagRepository;
import com.example.Keyhub.service.IAdminTagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
public class AdminTagImpl implements IAdminTagService {
    @Autowired
    ITagRepository tagRepository;
    @Autowired
    ICategoryRepository categoryRepository;
    @Transactional
    @Override
    public TagDTO addTag(TagRequestDTO tagRequestDTO, Users users) {
        Tag tag = new Tag();
        tag.setName(tagRequestDTO.getName());
        List<Long> categoryIds = tagRequestDTO.getCategoryIds();
        List<Category> categoryList = new ArrayList<>();
        if (categoryIds!=null)
        {
            categoryList = categoryRepository.findAllById(categoryIds);
        }
        if (categoryList!=null)
        {
            tag.setCategories(new HashSet<>(categoryList));
            for (Category category : categoryList) {
                category.getTags().add(tag);
            }
        }
        tagRepository.save(tag);
        TagDTO tagDTO = new TagDTO();
        tagDTO.setId(tag.getId());
        tagDTO.setName(tag.getName());
        return tagDTO;
    }

    @Override
    public void addTagToCategory(TagRequestDTO tagRequestDTO, Users users, Long tag_id) {
        Tag tag = tagRepository.findById(tag_id).orElse(null);
        List<Long> categoryIds = tagRequestDTO.getCategoryIds();
        List<Category> categoryList = new ArrayList<>();
        if (categoryIds!=null)
        {
            categoryList = categoryRepository.findAllById(categoryIds);
        }
        if (categoryList!=null)
        {
            assert tag != null;
            tag.setCategories(new HashSet<>(categoryList));
            for (Category category : categoryList) {
                category.getTags().add(tag);
            }
        }
        tagRepository.save(tag);
    }
    @Transactional
    @Override
    public void deleteTagToCategory(TagRequestDTO tagRequestDTO, Users users, Long tag_id) {
        Tag tag = tagRepository.findById(tag_id).orElse(null);
        List<Long> categoryIds = tagRequestDTO.getCategoryIds();
        List<Category> categoryList = new ArrayList<>();
        if (categoryIds!=null)
        {
            categoryList = categoryRepository.findAllById(categoryIds);
        }
        if (categoryList!=null)
        {
            tag.setCategories(new HashSet<>(categoryList));
            for (Category category : categoryList) {
                category.getTags().remove(tag);
            }
        }
        tagRepository.save(tag);
    }
    @Transactional
    @Override
    public void deleteTag(Long tag_id, Users users) {
        Tag tag = tagRepository.findById(tag_id).orElse(null);
        List<Category> categoryList = categoryRepository.findAll();
        assert tag != null;
        tag.setCategories(new HashSet<>(categoryList));
        for (Category category : categoryList) {
            category.getTags().remove(tag);
        }
        tagRepository.delete(tag);
    }

    @Override
    public boolean exitsTag(Long tag_id) {
        return !tagRepository.existsById(tag_id);
    }
}
