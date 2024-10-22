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
    public Robot moveForward() {
        robotService.moveForward();
        return robotService.getRobot();
    }
    
    @PostMapping("/l")
    public Robot turnLeft() {
        robotService.turnLeft();
        return robotService.getRobot();
    }
    
    @PostMapping("/r")
    public Robot turnRight() {
        robotService.turnRight();
        return robotService.getRobot();
    }
    
}