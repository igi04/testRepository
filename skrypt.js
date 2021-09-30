/*

//ZADANIE 1

for(i=2; i<=50; i=i+2)
{
    document.writeln(i);
}

document.write("<br>")

for(i=1; i<=50; i+=2)
{
    document.writeln(i);
}

*/
//ZADANIE 3

do{
liczba=parseInt(prompt("Podaj liczbe calkowita 1-100: ", " "));
} while(liczba>100 || liczba<1)

slupek="<font color=\"#00FF00\">"

for(i=1; i<liczba; i++)
{
    slupek+='|';
}

document.write(slupek);

slupek="<font color=\"#0000FF\">"

for(i=liczba; i<=100; i++)
{
    slupek+='|'
}

document.write(slupek+" = "+liczba+" %");
