#include <stdio.h>

//函数中没有，使用void

/*返回值类型 函数名（自变量类型、个数，即形参列表）{
    函数块
    }*/
    
//自定义函数放在上端
void myFunction(){
        printf("这是一个没有返回值的函数\n");
    }

    double cylinderVolum(double r,double h){
        const double pi = 3.1415926;
        return pi * r * r * h;
    }

int main(){

    myFunction();
    printf("V=%.2f\n",cylinderVolum(10,20));

    return 0;
}