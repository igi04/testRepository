#include <iostream>
#include <time.h>

using namespace std;

int main()
{
 time_t aktualny_czas;
 struct tm *w;
 time(&aktualny_czas);
 w=localtime(&aktualny_czas);
 cout<<

 return 0;

}
