// 常量

#include <stdio.h>
#include <math.h>

int main() {
   
   //定义常量，无法后续更改
   const int WORKING_HOURS_PER_WEEK = 40;
   //定义是必须赋值
   //一般使用大写字母

   //test
   const float PI = 3.1415;
   float circle_s = PI * pow(2,3);
   printf("The S of this circle is %.2f\n",circle_s);
   return 0;
}