import java.util.Scanner;

public class DhsTop
{

/*
	양 끝은 1, 1
	중간 element 들은 numRows-1 의 current_index-1 과 current_index 에 해당하는 원소 두개의 합
*/

	public static void main (String[] args)
	{
		int MAX_LENGHT = 1000;
		int numRows = 0;

		Scanner sc = new Scanner(System.in);

		do {
			numrows = sc.nextInt();
		} while(numrows<1 || numrows > MAX_LENGHT);
		

		int[][] dhsTop = createDhsTop(4);
 
		printDhsTop(dhsTop);
	}
 
	public static int[][] createDhsTop(int numRows) {
		int[][] dhsTop = new int[numRows][];
 
		for(int i = 0; i<numRows; i++) {
			int[] rows = new int[i+1];
 
			for(int j = 0; j<i+1; j++) {
				if(j==0) {
					rows[j] = 1;
				} else if(j==i) {
					rows[j] = 1;
				} else {
					int value = dhsTop[i-1][j-1] + dhsTop[i-1][j];
					rows[j] = value;
				}
			}
 
			dhsTop[i] = rows;
		}
 
		return dhsTop;
	}
 
	public static void printDhsTop(int[][] dhsTop) {
		for(int i=0; i<dhsTop.length; i++) {
			for(int j=0; j<dhsTop[i].length; j++) {
				System.out.print(dhsTop[i][j] + " ");
			}
			System.out.println("");
		}
	}
}