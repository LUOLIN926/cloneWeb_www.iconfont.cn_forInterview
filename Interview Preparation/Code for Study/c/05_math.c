#include <stdio.h>
//使用数学库
#include <math.h>

int main() {
   
   //+-*/
   printf("the anwser1 is %d\n",1+2-3/4*5);
   printf("the anwser2 is %.2f\n",1+2-3/4.0*5);

   //开平方sqrt
   printf("The square root of 9 is %lf\n",sqrt(9));
   //注意返回double类型结果

   //乘次方pow(x,y),其中x为底数，y为指数，返回double类型结果）
   printf("The second square  of 9 is %lf\n",pow(9,2));

   //优化
   double result_a;
   result_a = pow(9,3);
   printf("The 3rd square of 9 is %lf\n",result_a);

   //test1
   int result_1;
   result_1 = 2+10/8*3;
   printf("result_1=%d \n",result_1);

   double result_2;
   result_2 = 2+10/8.0*3;
   printf("result_2=%lf\n",result_2);

   //test2
   int a = -1;
   int b = -2;
   int c = 3;
   double x_1 = (-b + sqrt(pow(b,2) - 4 * a * c)) / 2 * a;
   double x_2 = (-b - sqrt(pow(b,2) - 4 * a * c)) / 2 * a;
   printf("The answer is :%lf;%lf",x_1,x_2);
   
   return 0;
}