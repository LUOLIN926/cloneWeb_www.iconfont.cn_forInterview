/*for循环
for(初始化表达式；条件表达式；更新表达式){

};
*/

#include <stdio.h>

int main(){
    for (int i = 1;i <= 10;i = i + 1){
        printf("%d\n",i);
    }
    
    //i + 1 可用 i++ 与表示,注意与++i的区别
    int a = 5;
    int x = a++;  //x = 5, a = 6 (先取值，后自增)
    printf("1_a=%d x=%d\n",a,x);
    int y = ++a;  //y = 7, a = 7 (先自增，后取值)
    printf("2_a=%d y=%d\n",a,y);
    
    
    //break跳出循环
    int saved_money = 30;
    for(int i = 1;i <= 90;i++){
        if(saved_money >= 2000){
            printf("That's enough\n");
            break;
        }
        saved_money = saved_money + 100;
    }

    //continue跳过循环
    for (int i = 1;i <= 10;i++){
        if(i % 2 == 0){
            continue;
        }
        printf("奇数：%d\n",i);
    }

    return 0;
}