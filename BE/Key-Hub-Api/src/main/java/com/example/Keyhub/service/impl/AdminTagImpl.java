package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.TagRequestDTO;
import com.example.Keyhub.data.dto.response.TagDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.Tag;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.ICategoryRepository;
import com.example.Keyhub.data.repository.ITagRepository;
import com.example.Keyhub.service.IAdminTagService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Service
public class AdminTagImpl implements IAdminTagService {
    final
    ITagRepository tagRepository;
    final
    ICategoryRepository categoryRepository;

    public AdminTagImpl(ITagRepository tagRepository, ICategoryRepository categoryRepository, IBlogRepository blogRepository) {
        this.tagRepository = tagRepository;
        this.categoryRepository = categoryRepository;
        this.blogRepository = blogRepository;
    }

    @Transactional
    @Override
    public TagDTO addTag(TagRequestDTO tagRequestDTO, Users users) {
        Tag tag = new Tag();
        tag.setName(tagRequestDTO.getName());
        Category category = categoryRepository.findById(tagRequestDTO.getCategoryIds()).orElse(null);
        if (category==null)
        {
            return null;
        }
        tag.setCategory(category);
        tagRepository.save(tag);
        TagDTO tagDTO = new TagDTO();
        tagDTO.setId(tag.getId());
        tagDTO.setName(tag.getName());
        return tagDTO;
    }

    @Override
    public void addTagToCategory(TagRequestDTO tagRequestDTO, Users users, Long tag_id) {
        Tag tag = tagRepository.findById(tag_id).orElse(null);
        Category category = categoryRepository.findById(tagRequestDTO.getCategoryIds()).orElse(null);
        category.getTags().add(tag);
        categoryRepository.save(category);
        tagRepository.save(tag);
    }
    @Transactional
    @Override
    public void deleteTagToCategory(TagRequestDTO tagRequestDTO, Users users, Long tag_id) {
        Tag tag = tagRepository.findById(tag_id).orElse(null);
        Category category = categoryRepository.findById(tagRequestDTO.getCategoryIds()).orElse(null);
        category.getTags().remove(tag);
        categoryRepository.save(category);
        tagRepository.save(tag);
    }
    final
    IBlogRepository blogRepository;
    @Transactional
    @Override
    public void deleteTag(Long tag_id, Users users) {
        Tag tag = tagRepository.findById(tag_id).orElse(null);
        List<Blog> blogList= blogRepository.findByTags(tag);
        for (Blog blog: blogList)
        {
            blog.getTags().remove(tag);
        }
        assert tag != null;
        Category category = categoryRepository.findById(tag.getCategory().getId()).orElse(null);
        assert category != null;
        category.getTags().remove(tag);
        tagRepository.delete(tag);
    }

    @Override
    public boolean exitsTag(Long tag_id) {
        return tagRepository.existsById(tag_id);
    }

    @Override
    public boolean exitsTagByName(String name) {
        return tagRepository.existsByName(name);
    }

    @Override
    public TagDTO editTag(TagRequestDTO tagRequestDTO, Users users) {
        Tag tag = tagRepository.findById(tagRequestDTO.getId()).orElse(null);
        TagDTO tagDTO = new TagDTO();
        if (tag!=null)
        {
            tag.setName(tagRequestDTO.getName());
            Category category = categoryRepository.findById(tagRequestDTO.getCategoryIds()).orElse(null);
            assert category != null;
            Set<Tag> tags = category.getTags();
            tags.remove(tag);
            tags.add(tag);
            categoryRepository.save(category);
            tag.setCategory(category);
            tagRepository.save(tag);
            tagDTO.setId(tag.getId());
            tagDTO.setName(tag.getName());
            return tagDTO;
        }
        return tagDTO;
    }
}
