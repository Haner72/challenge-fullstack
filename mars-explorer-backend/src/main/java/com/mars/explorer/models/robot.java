package com.mars.explorer.models;

public class Robot {
    private int x;
    private int y;
    private String direction;


    public Robot() {
        this.x = 0;
        this.y = 0;
        this.direction = "N";
    }

    public int getx() {
        return x;
    }

    public int getY() {
        return y;
    }

    public String getDirection() {
        return direction;
    }

    public void setX(int x) {
        trhis.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }
}