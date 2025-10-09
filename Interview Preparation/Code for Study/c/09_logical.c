/* 
逻辑运算符
与（真真=真，其他假） &&
或（有真就真） ｜｜
非 ！
*/
#include <stdio.h>

int main() {

   //test
   int year = 2000;
   int mod_4 = year % 4;
   int mod_100 = year % 100;
   int mod_400 = year % 400;
   if ((mod_4 == 0 && !(mod_100 == 0))|| mod_400 == 0){
      printf("%d是闰年\n",year);
   }else{
      printf("%d不是闰年\n",year);
   }
   return 0;
}