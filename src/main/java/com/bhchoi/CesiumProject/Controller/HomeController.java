package com.bhchoi.CesiumProject.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/")
	public String index() {
		return "Home/index";
	}

	@GetMapping("/model3ds")
	public String model3ds() {
		return "Home/model3ds";
	}

}
