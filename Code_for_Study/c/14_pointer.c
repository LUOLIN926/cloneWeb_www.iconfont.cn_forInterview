// 指针
//数据类型* 指针名
//int* p

#include <stdio.h>

int main() {
   int i = 3;
   int* i_ptr = &i; 
   //如果不知道 int* i_ptr = NULL; 

   //*指针名用于间接访问 如*i_ptr访问i
   printf("i:%d\n",*i_ptr);

   *i_ptr = 1988;
   printf("i:%d\n",i);
   return 0;
}