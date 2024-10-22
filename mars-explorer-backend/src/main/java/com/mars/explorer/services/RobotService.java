package com.mars.explorer.services;

import com.mars.explorer.models.Robot;
import org.springframework.stereotype.Service;

@Service
public class RobotService {
    private Robot robot = new Robot();

    public Robot getRobot() {
        return robot;
    }

    public void moveForward() {
        switch (robot.getDirection()) {
            case "N":
                if (robot.getY() < 4) robot.setY(robot.getY() + 1);
                break;
            case "E":
                if (robot.getX() < 4) robot.setX(robot.getX() + 1);
                break;
            case "S":
                if (robot.getY() > 0) robot.setY(robot.getY() - 1);
                break;
            case "W":
                if (robot.getX() > 0) robot.setX(robot.getX() - 1);
                break;
        }
    }
    
    public void turnLeft() {
      switch (robot.getDirection()) {
            case "N":
                robot.setDirection("W");
                break;
            case "W":
                robot.setDirection("S");
                break;
            case "S":
                robot.setDirection("E");
                break;
            case "E":
                robot.setDirection("N");
                break;
        }  
    }

     public void turnRight() {
        switch (robot.getDirection()) {
            case "N":
                robot.setDirection("E");
                break;
            case "E":
                robot.setDirection("S");
                break;
            case "S":
                robot.setDirection("W");
                break;
            case "W":
                robot.setDirection("N");
                break;
        }
    }
}