#include <stdio.h>

//while与if相似，但if只判断一次，while循环判断直到条件为真
int main(){
    double price = 5999.9;
    double saved_money = 0;

    while(saved_money < price){
        saved_money = saved_money + 180;
        printf("now, you have %.2f yuan.\n",saved_money);
    }
    printf("you save %.2f yuan, is time to buy a new phone!\n",saved_money);
    
    /*do while 先执行，再判断 
    do {

    } while ();
    */

    saved_money = 0;
    do{
        saved_money = saved_money + 100;
        printf("1234now, you have %.2f yuan.\n",saved_money);
    }while(saved_money < price);
    printf("1223you save %.2f yuan, is time to buy a new phone!\n",saved_money);

    return 0;
}