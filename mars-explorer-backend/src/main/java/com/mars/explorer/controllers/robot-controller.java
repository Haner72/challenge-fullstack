package com.mars.explorer.controllers;

import com.mars.explorer.models.Robot;
import com.mars.explorer.services.RobotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/robot")
public class RobotController {
    @Autowired
    private RobotService robotService;

    @GetMapping
    public Robot getRobotPosition() {
        return robotService.getRobot();
    }

    @PostMapping("/move")
    public void moveForward() {
        robotService.moveForward();
    }

    @PostMapping("/left")
    public void turnLeft() {
        robotService.turnLeft();
    }

    @PostMapping("/right")
    public void turnRight() {
        robotService.turnRight();
    }
}