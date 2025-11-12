// 字符串
//注意以空字符结尾（\0）

#include <stdio.h>

int main() {
   
   char str[] = "See you!";
   for(int i = 0;i < 9;i++){
      printf("%c\n",str[i]);
   }
   printf("%s\n",str);//用%s输出字符串，可以用%5s限制读取长度

   //sacnf输入字符串
   char str_1[10];
   printf("请输入英文：\n");
   scanf("%9s",str_1);//无需&
   printf("your input:%s",str_1);
   
   return 0;
}