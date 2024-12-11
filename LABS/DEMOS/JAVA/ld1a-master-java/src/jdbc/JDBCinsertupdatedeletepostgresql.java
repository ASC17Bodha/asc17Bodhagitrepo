package jdbc;

import java.sql.*;

public class JDBCinsertupdatedeletepostgresql {
    public static void main(String[] args) {
        try {
            System.out.println("Establishing connection to database");
            Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "postgres");
            System.out.println("Create the Statement");
            Statement statement = connection.createStatement();
            System.out.println("Execute the Query");
            ResultSet resultSet = statement.executeQuery("select * from actor");
            System.out.println("Process the result");
            while(resultSet.next()){
             System.out.println(resultSet.getInt(1));
             System.out.println(resultSet.getString(2));
             System.out.println(resultSet.getString("last_name"));
            }
        }
            catch(SQLException e){
                System.out.println("Error connecting to database"+ e.getMessage());
            }
            
        }
    }
