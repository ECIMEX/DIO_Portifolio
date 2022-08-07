// Abaixo segue um exemplo de código que você pode ou não utilizar
//import java.io.IOException;
//import java.util.Scanner;
//
//public class  Desafio {
//    public static void main(String[] args) throws IOException {
//        Scanner leitor = new Scanner(System.in);
//        int cont = 0;
//        int soma = 0;
//        int n = leitor.nextInt();
//        
//TODO: Complete os espaços em branco com uma possível solução para o desafio
//        
//        while (n >= 1){
//            if (n >= 0) {
//                soma+= ;
//                cont++;
//            }
//            n = leitor.nextInt();
//        }
//        double media =          ;
//        System.out.println(String.format("%.2f",     ));
//    }
//}

import java.io.IOException;
import java.util.Scanner;

public class Desafio {
	
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int cont = 0;
        double soma = 0; 
        double n = 0;
        while (n >= 0) {
            n = leitor.nextInt();
            if (n >= 0) { 
                cont++;
                soma+=n;
            }
        }
        double media = soma / cont;
        System.out.println(String.format("%.2f", media));
    }
	
}