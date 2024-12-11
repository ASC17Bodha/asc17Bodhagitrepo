/**
 * Represents an Employee entity mapped to the "EMPLOYEES" table in the database.
 *
 * Annotations:
 *
 * @Entity - Specifies that the class is an entity and is mapped to a database table.
 * @Table(name="EMPLOYEES") - Specifies the name of the database table to be used for mapping.
 * @Id - Specifies the primary key of an entity.
 * @GeneratedValue(strategy = GenerationType.AUTO) - Provides the specification of generation strategies for the values of primary keys.
 * @Column(name="EMPLOYEE_ID") - Specifies the mapped column for a persistent property or field.
 * @Column(name="EMPLOYEE_NAME", nullable=false) - Specifies the mapped column for a persistent property or field and indicates that the column cannot be null.
 */

// JPA is a specification and Hibernate is an implementation.

package com.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="EMPLOYEES")
public class Employee {
	@Id
	// @GeneratedValue(strategy = GenerationType.AUTO)
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