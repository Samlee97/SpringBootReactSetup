package controller.rest;

import model.Employee;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class EmployeeController {

    @RequestMapping(method = RequestMethod.GET, path = "/employee")
    public ResponseEntity employee() {
        Employee e1 = new Employee("Paulo", 26, 1991);
        Employee e2 = new Employee("Victor", 26, 1991);
        Employee e3 = new Employee("Jérôme", 26, 1991);
        Employee e4 = new Employee("Romain", 26, 1991);
        return ResponseEntity.ok(Arrays.asList(e1, e2, e3, e4));
    }

}
