package check;

import constants.Constants;

public class Check {
	private static String firstName = "ともあき";
	private static String lastName = "滝";

	private static void printName(String lastName, String firstName) {
		System.out.println("printNameメソッド　→　" + lastName + firstName);
	}

	public static void main(String[] args) {

		RobotPet rob = new RobotPet(Constants.CHECK_CLASS_R2D2, Constants.CHECK_CLASS_LUKE);

		Pet pet = new Pet(Constants.CHECK_CLASS_JAVA, Constants.CHECK_CLASS_HOGE);

		printName(lastName, firstName);
		pet.introduce();
		rob.introduce();
	}

}

//【Check.java】にてフィ;ールド変数firstNameとlastNameを宣言し、
//firstName →　自分の名字　lastName →　自分の名前で初期化しなさい。
//なお、変数のアクセス修飾子は「private」とする。
//**課題②
//【Check.java】にてfirstNameとlastNameを引数で受け取って、
//連結して表示させるメソッド「printName」を作成しなさい。
//作成した関数のアクセス修飾子は「private」とする。
//課題③
//【Check.java】にてPetクラスとRobotPetクラスをインスタンス化して、下記の完成イメージを出力させなさい。
//printNameメソッド　→　名前
//■僕の名前はjava吉です
//主人
//♦︎私はロボット。名前はR2D2
//◇ご主人様はルーク。