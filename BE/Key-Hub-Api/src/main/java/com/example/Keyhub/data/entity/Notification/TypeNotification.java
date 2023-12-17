package com.example.Keyhub.data.entity.Notification;

public enum TypeNotification {
    COMMENT("comment"),
    LIKE("like"),
    FOLLOW("follow"),
    DELETE_POST("delete_post");

    private String value;

    TypeNotification(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

}
