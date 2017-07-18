#include <stdio.h>

int primo(int num)
{
	int i;
	if (num < 2)
		return 0;
	for (int i = 2; i < num; i++)
	{
		if (num % i == 0)
			return 0;
	}
	return 1;
}

int main()
{
	for (int i = 0; i < 100000; i++)
	{
		if (primo(i))
			printf("%d\n", i);
	}
	return 0;
}