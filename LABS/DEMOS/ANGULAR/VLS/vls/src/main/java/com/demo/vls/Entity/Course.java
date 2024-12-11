package vls.src.main.java.com.demo.vls.Entity;
import jakarta.persistence.*;

@Entity
@Table(name = "courses")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    private String courseId;
    
    @Column(nullable = false)
    private String courseName;
    
    private String authorId;
    
    @Column(length = 1000)
    private String description;
    
    private int duration;
    
    private double price;
    
    private LocalDateTime createdDate;
}
