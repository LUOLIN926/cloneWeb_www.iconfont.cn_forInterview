#include <stdio.h>

int main(){
    
    //if else 嵌套
    /*if(条件1){
        条件一执行代码
    }
    else if(条件二){
        条件二执行代码
    }
    else{
        以上都为假执行代码，可不写
    }*/

    float price = 70;
    if (price < 30){
        printf("The price is really nice!\n");
    }
    else if (price < 60){
        printf("The price is good.\n");
    }
    else if (price < 100){
        printf("The price is quite high.\n");
    }
    else{
        printf("It not an affordable price.\n");
    }

    return 0;
}