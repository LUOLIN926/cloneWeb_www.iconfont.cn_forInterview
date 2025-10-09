#include <stdio.h>

int main() {
   //int整形
   //float单精度浮点型
   //double双精度浮点型
   //char字符型
   //long long 

   //int 整形 4byte（32bit）
   int dumpings = 3;
   printf("The number of dumpings is:%d\n",dumpings); 

   //char 字符型 1byte(8bit)
   char gender_1 = 'M';
   char gender_2 = 'F';
   printf("gender1 is:%c\ngender2 is: %c\n",gender_1,gender_2);
   //printf一次可以打印多个，注意顺序
   //char使用ASCII编码,用%d可以输出整数
   printf("gender1 is:%d\ngender2 is:%d\n",gender_1,gender_2);
   
   //了解内存长度
   printf("size:%zu\n",sizeof(int));  

   //test1
   int int_1 = 80;
   printf("int_1 is %d\n",int_1);
   char char_1 = 'A';
   printf("char_1 is %c,its code is %d\n",char_1,char_1);
   char char_2 = int_1;
   printf("char_2 is %c\n",char_2);
   printf("char use %zu byte",sizeof(char));

   
   return 0;
}