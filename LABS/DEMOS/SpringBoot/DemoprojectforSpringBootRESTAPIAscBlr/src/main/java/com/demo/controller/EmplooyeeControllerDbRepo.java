package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.demo.entity.Employee;
import com.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class EmplooyeeControllerDbRepo {
    //Dependency Injection
    // The EmployeeRepository is a dependency for the EmployeeController
    // The EmployeeRepository is injected into the EmployeeController using the @Autowired annotation
    // The EmployeeRepository is used to perform CRUD operations on the Employee entity
    // The EmployeeRepository is a JpaRepository interface
    // The JpaRepository is implemented by the Spring Data JPA framework which by default uses hibernate as the JPA provider.

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List getEmployeeList() {
//		List<Employee> employeeList = null;
//        employeeList = employeeRepository.findAll();
//        return employeeList;
        return employeeRepository.findAll();
    }


    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable(value="id") Integer id) {
        Employee existingEmployee = employeeRepository.findById(id).get();
        return existingEmployee;
    }

    @PutMapping("/employees/{id}")
    public Employee updateEmployee(@PathVariable(value = "id") Integer id,@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        Employee savedEmployee = employeeRepository.save(employee);
        return savedEmployee;
    }
    @DeleteMapping("/employees/{id}")
    public Employee deleteEmployeeById(@PathVariable(value = "id") Integer id) {
        Employee existingExmployee = employeeRepository.findById(id).get();
        employeeRepository.delete(existingExmployee);
        return existingExmployee;
    }
}