package practice_3;


import java.time.LocalDateTime;

public class data {

    public static void main(String[] args) {
        LocalDateTime ldt = LocalDateTime.now();
        ldt = ldt.withMonth(12);
        System.out.println(ldt.getMonthValue() + "月");


        System.out.println(ldt.getMonthValue() + "月");
    }
}