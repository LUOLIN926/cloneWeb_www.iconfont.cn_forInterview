// 数组
//数据类型 数组名称[整数常量]

#include <stdio.h>

int main() {
  
   float scores_1[3] = {10.1,10.2,10.6};
   printf("%.2f\n",scores_1[1]);
   scores_1[1] = 88.5;
   printf("%.2f\n",scores_1[1]);

   float scores_2[10] = {20.1,45,88.1,49.4,59.9,96.1,89.9,69.8,77.4,98.3};
   for (int i = 0;i < 10;i++){
      if(scores_2[i] < 60){
         printf("index：%d ",i + 1);
         printf("scores:%.2f\n",scores_2[i]);
      }
   }

   //二维数组
   int a[3][5];//3行5列
   int b[][5]={
      {0,1,2,3,4},
      {31,30,43,40,5},
   };//列数必须给出、行数可省略
   printf("you pick %d",b[1][3]);

   return 0;
}