package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.TagRequestDTO;
import com.example.Keyhub.data.dto.response.TagDTO;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

public interface IAdminTagService {
    TagDTO addTag(TagRequestDTO tagRequestDTO, Users users);
    void  addTagToCategory(TagRequestDTO tagRequestDTO, Users users, Long tag_id);
    void deleteTagToCategory(TagRequestDTO tagRequestDTO, Users users, Long tag_id);
    void deleteTag(Long tag_id, Users users);
    boolean exitsTag(Long tag_id);
    boolean exitsTagByName(String name);
    TagDTO editTag(TagRequestDTO tagRequestDTO , Users users);
}
