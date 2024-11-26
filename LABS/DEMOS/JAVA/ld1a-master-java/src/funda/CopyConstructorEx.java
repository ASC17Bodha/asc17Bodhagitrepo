package funda;

// We can create a copy of an object using a copy constructor
// A copy constructor is a constructor that takes an object of the same class as a parameter


public class CopyConstructorEx {
    public static void main(String[] args) {
        Product originalProduct = new Product(1, "Laptop", 999.99);
        Product copiedProduct = new Product(originalProduct);
        // Product copiedProduct =  originalProduct;

        System.out.println("Original Product: " + originalProduct);
        System.out.println("Copied Product: " + copiedProduct);
        
    }
}

class Product {
    private int id;
     String name;
    private double price;

    // Constructor
    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Copy constructor
    // A copy constructor is a constructor that takes an object of the same class as a parameter
    public Product(Product product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
    }

    @Override
    public String toString() {
        return "Product{id=" + id + ", name='" + name + "', price=" + price + "}";
    }
}