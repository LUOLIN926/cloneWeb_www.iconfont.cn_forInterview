// scanf输入数据

//scanf在stdio库中
#include <stdio.h>

//scanf（格式字符串，变量地址1，变量地址2.。。。）；

int main() {
   int a;
   scanf("%d",&a);//&为取地址符 
   printf("a=%d\n",a);

   //输入多个时加空格
   int b;
   int c;
   scanf(" %d",&b);
   scanf(" %d",&c);
   printf("a=%d\nb=%d\nc=%d",a,b,c);
   return 0;
}