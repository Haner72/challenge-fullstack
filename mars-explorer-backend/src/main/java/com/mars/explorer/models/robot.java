package com.mars.explorer.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Robot {
    private int x;
    private int y;
    private String direction;

    public Robot() {
        this.x = 0;
        this.y = 0;
        this.direction = "N";
    }

    @JsonProperty("x")
    public int getX() {
        return x;
    }

    @JsonProperty("y")
    public int getY() {
        return y;
    }

    @JsonProperty("direction")
    public String getDirection() {
        return direction;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }
}