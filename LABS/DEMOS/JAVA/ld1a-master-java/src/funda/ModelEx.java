package funda;

class ProductModel {
    private String productId="ISP001";
    private String productName="Laptop";
    private int productPrice=10000;
    @Override
    public String toString() {
        return "ProductModel [productId=" + productId.substring(2) + ", productName=" + productName + " productPrice=" + productPrice + "]";
    }
    public void setProductPrice(int productPrice){
        if(productPrice<0 || productPrice>10000){
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