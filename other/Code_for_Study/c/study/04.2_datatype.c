#include <stdio.h>

int main() {
   //float单精度浮点型，一般表示6-7位小数4byte(32bit)
   float height = 1.81; 
   //使用%f默认保留6位小数
   printf("The height is %f\n",height);
   //保留制定小数用%.2f
   printf("The height is %.2f\n",height); 

   //double双精度浮点型8byte(64bit)
   double distance = 3.1415926536;
   //使用%lf默认保留6位
   printf("The distance is %lf\n",distance);
   //保留指定小数用%.10
   printf("The distance is %.10lf\n",distance);

   //test
   float float_1 = 11.27;
   float float_2 = 11.12345678910;
   printf("float_1:%f\nfloat_2:%f\n",float_1,float_2);
   double double_1 = 11.12345678910;
   printf("float_2:%.10lf\ndouble_1:%.10lf\n",float_2,double_1);
   return 0; 
}