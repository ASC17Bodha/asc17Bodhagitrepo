@Repository
public interface CourseRepository extends JpaRepository<Course, String> {
    List<Course> findByCourseName(String courseName);
    List<Course> findByAuthorId(String authorId);
    List<Course> findByCourseNameContainingIgnoreCase(String keyword);
}
