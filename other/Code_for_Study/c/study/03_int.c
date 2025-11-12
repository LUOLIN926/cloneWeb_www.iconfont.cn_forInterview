// Created on iPad.

#include <stdio.h>

int main() {
   //先定义，再赋值
   int tv_money;
   tv_money = 666 ;

   //一步到位
   int sofa_money = 375;

   //变量赋值变量
   int bookshelf_money =  tv_money;
   
   tv_money = 0;
   
   //打印变量
   printf("书架上的钱为：%d\n",bookshelf_money);

   //pritise
   int mike_score = 89;
   int john_score = 98;
   mike_score = john_score;
   john_score = 89;
   printf("John's score is %d\n",john_score);
   printf("Mike' s score is %d\n",mike_score);
   return 0;
}