package funda;

public class ProductModel {
    private String productId="P001";
    private String productName="Laptop";
    private int productPrice=10000;
    // @Override
    public String toString() {
        return "ProductModel [productId=" + productId + ", productName=" + productName + " productPrice=" + productPrice + "]";
    }
    public void setProductPrice(int productPrice){
        if(this.productPrice<0 || this.productPrice>10000){
            System.out.println("Invalid product price");
            return;
        }
        this.productPrice=productPrice;
    }


}
public class ModelEx{
    
    public static void main(String[] args){
        ProductModel productModel=new ProductModel();
        System.out.println(productModel);
        productModel.setProductPrice(1000);
        System.out.println(productModel);
        productModel.setProductPrice(100000);
        System.out.println(productModel);
    }
}
    