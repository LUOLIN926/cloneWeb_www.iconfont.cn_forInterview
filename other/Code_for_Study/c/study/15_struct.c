//结构体struct

#include <stdio.h>

int main() {

//1
   struct{
         int a;
         char b;
   }t,ti;

   t.a = 1;
   ti.a = 8;
   ti.b = 'A';

   printf("demo_1.1:%d\n",ti.a);
   printf("demo_1.2:%d\n",t.a);
   printf("demo_1.3:%c\n\n",ti.b);
   
//2
   struct person{
      int num;
      char name[10];
   };
   
   struct person p = {20,"ssh"};

   printf("demo_2.1:%d\n",p.num);
   printf("demo_2.2:%s\n",p.name);

//3
   typedef struct{
      int lead;
      int gode[100];
   }Data;
   
   Data h = {19,{1,2,3,4}};
   
   printf("demo_3.1:%d\n",h.gode[1]);
   printf("demo_3.2:%d\n",h.lead);

//结合指针
   h.gode[2] = 114514;
   Data *h_str;
   h_str = &h;

   printf("str_demo1:%d\n",(*h_str).gode[2]);
   printf("str_demo2:%d\n",h_str->gode[2]);
   //这两种写法等价

   return 0;
}