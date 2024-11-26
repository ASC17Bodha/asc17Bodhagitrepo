package asgn.asgn3_1;


public class movie {
  
    private String movieName;
    private String producedBy;
    private String directedBy;
    private int duration; 
    private int year;
    private String category;

    public movie(String movieName, String producedBy) {
        if (movieName == null || producedBy == null || movieName.isEmpty() || producedBy.isEmpty()) {
            throw new IllegalArgumentException("movie name and produced by are mandatory fields.");
        }
        this.movieName = movieName;
        this.producedBy = producedBy;
    }


    public movie(String movieName, String producedBy, String directedBy, int duration, int year, String category) {
        this(movieName, producedBy); 
        this.directedBy = directedBy;
        this.duration = duration;
        this.year = year;
        this.category = category;
    }

    public String getmovieName() {
        return movieName;
    }

    public void setmovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getProducedBy() {
        return producedBy;
    }

    public void setProducedBy(String producedBy) {
        this.producedBy = producedBy;
    }

    public String getDirectedBy() {
        return directedBy;
    }

    public void setDirectedBy(String directedBy) {
        this.directedBy = directedBy;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void displaymovieInfo() {
        System.out.println("movie Name: " + movieName);
        System.out.println("Produced By: " + producedBy);
        System.out.println("Directed By: " + (directedBy != null ? directedBy : "N/A"));
        System.out.println("Duration: " + (duration > 0 ? duration + " minutes" : "N/A"));
        System.out.println("Year: " + (year > 0 ? year : "N/A"));
        System.out.println("Category: " + (category != null ? category : "N/A"));
    }
}

