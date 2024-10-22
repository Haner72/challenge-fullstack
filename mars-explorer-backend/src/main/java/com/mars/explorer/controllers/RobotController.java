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

    @GetMapping("/status")
    public Robot getRobotPosition() {
        return robotService.getRobot();
    }

    @PostMapping("/m")
    public void moveForward() {
        robotService.moveForward();
        System.out.println(robotService.getRobot());
    }
    
    @PostMapping("/l")
    public void turnLeft() {
        robotService.turnLeft();
        System.out.println(robotService.getRobot());
    }
    
    @PostMapping("/r")
    public void turnRight() {
        robotService.turnRight();
        System.out.println(robotService.getRobot());
    }
}