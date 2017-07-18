using System;

namespace testecs
{
	class Program
	{
		static bool primo(int num)
		{
			if (num < 2)
				return false;
			for (int i = 2; i < num; i++)
			{
				if (num % i == 0)
					return false;
			}
			return true;
		}

		public static void Main(string[] args)
		{
			for (int i = 0; i < 100000; i++)
			{
				if (primo(i))
					Console.WriteLine(i);
			}
		}
	}
}
