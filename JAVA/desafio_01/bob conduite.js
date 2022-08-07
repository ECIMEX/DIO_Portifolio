// Abaixo segue um exemplo de código que você pode ou não utilizar
//import java.io.IOException;
//import java.util.Scanner;


//TODO: Complete os espaços em branco com uma possível solução para o desafio

 
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(System.in);
        int T = scan.nextInt();
        int R1, R2, R3;
        for (int i = 0; i < T; i++) {
        	R1 = scan.nextInt();
        	R2 = scan.nextInt();
        	R3 = R1 + R2;
        	System.out.println(R3);
        }
    }
	
}