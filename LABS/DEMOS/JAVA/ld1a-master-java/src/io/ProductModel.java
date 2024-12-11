package io;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class ProductModel {
    public static void main(String[] args) {
        File file=new File("src/io/ProductModel.dat");
        try{
            FileOutputStream fileOutputStream= new FileOutputStream(file);
            ObjectOutputStream objectoutputStream=new ObjectOutputStream(fileOutputStream);
            ProductModel productModel=new ProductModel();
            objectoutputStream.writeObject(productModel);
        }
        catch(FileNotFoundException fileNotFoundException){
            System.out.println("Exception:" + fileNotFoundException);
        }
        catch(IOException ioException){
            System.out.println("Exception:" + ioException.getMessage());
        }  
    }
}
