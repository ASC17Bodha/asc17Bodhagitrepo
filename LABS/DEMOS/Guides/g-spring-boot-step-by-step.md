:writing_hand:**Create Spring Boot project from start.spring.io**
-add dependencies as needed
-generate project
```xml
<dependencies>
    <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    </dependdencies>
```

:writing_hand:**Create a controller**
 Create a controller class(src.main.java.com.demo.controller)
```java
package com.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Employee;
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/api/v0")
@RequestMapping("/")
@RestController
public class EmployeeController {
    @GetMapping("/welcome")
	public String getWelcomeMessage() {
		return "Welcome to Spring Boot REST API!";
	}
	@GetMapping("/getHTMLView")
	public String getEmployeeView() {
//		model / provides data
		Employee employee = new Employee(1,"Sam",500);
		String htmlString = "";
		htmlString += "<!DOCTYPE html>";
		htmlString += "<html lang=\"en\">";
		htmlString += "<head>";
		htmlString += "    <title>Bootstrap forms</title>";
		htmlString += "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\">";
		htmlString += "    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\"";
		htmlString += "        integrity=\"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM\"";
		htmlString += "        crossorigin=\"anonymous\"></script><script>alert(\"welcome \");</script>";
		htmlString += "</head>";
		htmlString += "<body>";
		htmlString += "    <div class=\"container\" style=\"margin:50px;background-color:aquamarine;padding:50px;border-radius: 25px;\">";
		htmlString += "        <h1>Employee Data</h1> <br><br>";
		htmlString += "        <h2>" + employee.getId() + "</h2>";
		htmlString += "        <h2>" + employee.getName() + "</h2>";
		htmlString += "        <h2>" + employee.getSalary() + "</h2>";
		htmlString += "        <pre>Thank you .    <br>. . . Have a wonderful day       !!!! </pre>";
		htmlString += "    </div>";
		htmlString += "</body>";
		htmlString += "</html>;";
		return htmlString;
	}

    @GetMapping("/employee")
    public Employee getEmployee() {
        return new Employee(1, "Sam", 500);
    }

    	@GetMapping("/employees")
	public List getEmployeeList() {
		List<Employee> employeeList = new ArrayList<>();
		employeeList.add( new Employee(5555, "JumboJets", 55));
        employeeList.add(new Employee(6, "Nelson", 500));
        employeeList.add(new Employee(7, "Aayush The Billionare Boss!", 5000000));
//		return "{id : 1}";
		return employeeList;
	}
	@GetMapping("/employeeMap")
	public Map getEmployeeMap() {
		Map<Integer,Employee> employeeMap = new TreeMap<>();
		employeeMap.put(5, new Employee(5, "JumboJets", 55));
		employeeMap.put( 5555,new Employee(5555, "JumboJets", 55));
//		return "{id : 1}";
		return employeeMap;
	}

    // {
    //     "employees": [
    //       {
    //         "id": "5",
    //         "name": "JumboJets",
    //         "salary": "5"
    //       },
    //       {
    //         "id": "6",
    //         "name": "Nelson",
    //         "salary": "500"
    //       },
    //       {
    //         "id": "7",
    //         "name": "Aayush The Boss!",
    //         "salary": "5000000"
    //       }
    //     ]
    //   }
}
```



:writing_hand: **connect to hibernate**
```
spring.application.name=DemoprojectforSpringBootRESTAPIAscBlr
spring.datasource.url=jdbc:mysql://localhost:3306/sakila?useSSL=false
spring.datasource.username=root
spring.datasource.password=mysql


spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.hibernate.ddl-auto=update
```

:writing_hand: **create model class**
```java
package com.demo.model;

public class Employee {
	private int id;
	private String name;
	private int salary;

	public Employee(int id, String name, int salary) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getSalary() {
		return salary;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

}
```

:writing_hand: **covert this to an entity class**
```java
package com.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="EMPLOYEES")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="EMPLOYEE_ID")
	private int id;
	@Column(name="EMPLOYEE_NAME", nullable=false)
	private String name;
	private int salary;

	public Employee() {
	}
	public Employee(int id, String name, int salary) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getSalary() {
		return salary;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

}
```


:beginner: **layered architecture**
:writing_hand: **create a repository**
```java
package com.demo.repository;

import com.demo.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Integer> {

}
```
:writing_hand: **create a service**
-EmployeeService
-EmployeeServiceImpl


:writing_hand:**_Run endpoints_**
- localhost:8080/welcome
- localhost:8080/getHTMLView
- localhost:8080/employee
- localhost:8080/employeeMap


:writing_hand:**POM.xml**
```xml

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.3.6</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.demo</groupId>
	<artifactId>DemoprojectforSpringBootRESTAPIAscBlr</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>DemoprojectforSpringBootRESTAPIAscBlr</name>
	<description>Spring Boot REST API</description>
	<url/>
	<licenses>
		<license/>
	</licenses>
	<developers>
		<developer/>
	</developers>
	<scm>
		<connection/>
		<developerConnection/>
		<tag/>
		<url/>
	</scm>
	<properties>
		<java.version>17</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
```


:writing_hand: **Access the endpoints**


