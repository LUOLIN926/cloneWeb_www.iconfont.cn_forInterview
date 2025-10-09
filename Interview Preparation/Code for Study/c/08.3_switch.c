//switch

#include <stdio.h>

int main() {
   
   /*
   switch(表达式）{
      case 'A':
      要执行的语句；
      break；跳出
      case 'B':
      case 'C':
      default:
   }
   */

   int level = 3;
   switch(level){
      case 1:
         printf("the elevator is in 1 floor.\n");
         break;
      case 2:
         printf("the elevator is in 2 floor.\n");
         break;
      case 3:
         printf("the elevator is in 3 floor.\n");
         break;
      default:
         printf("Wrong!\n");
   }
   return 0;
}