#include <stdio.h>

//加入stdbool库文件（标准布尔型头文件）
#include <stdbool.h>


int main() {
  
  /*
  if(条件){
      要执行的内容
  }
  */

   bool is_data_low = true;
   if (is_data_low){
      printf("Your Data is low!\n");
   }
   //任意为非零值都看为真，如3为true

   /*
   比较使用两个等于
   a == a
   不等于
   a != b
   大于>
   大于等于>=
   小于<
   小雨等于<=
   */

   //if else
   float remaining_data = 100;
   if (remaining_data < 1){
      printf("Your Data is low!\n");
   }
   else{
      printf("Your have enough data now.\n");
   }
   
   
   //test_1
   int a = 50;
   int b = 1;
   int delta = a - b;
   if (delta > 0){
      printf("The different between a and b is %d\n",a - b);
   }
   else{
      printf("The different between a and b is %d\n",b - a);
   }
   return 0;
}