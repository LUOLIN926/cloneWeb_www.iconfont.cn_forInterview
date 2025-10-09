
#include <stdio.h>

int main() {
   int i;//行数
   int j;//空格
   int k;//*号
   int l;//生成行数

   printf("请输入行数：\n");
   scanf("%d",&l);
   for(i = 0;i < l;i++){
      
      for(j = 0;j < l - 1 - i;j++){
         printf(" ");
      }
      
      for(k = 0;k < 2*i+1;k++){
         printf("*");
      }
      
      printf("\n");
   
   }

   return 0;
}