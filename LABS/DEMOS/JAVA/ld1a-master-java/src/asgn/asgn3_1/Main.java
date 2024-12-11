package asgn.asgn3_1;

public class Main {
    public static void main(String[] args) {
        movie movie1 = new movie("Inception", "Warner Bros.");
        movie1.displaymovieInfo();

        System.out.println();

        movie movie2 = new movie(
                "The Dark Knight",
                "Warner Bros.",
                "Christopher Nolan",
                152,
                2008,
                "Action"
        );
        movie2.displaymovieInfo();
    }
}

