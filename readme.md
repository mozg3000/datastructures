#Data structures

В данной реализации типичных структур данных я преследовал не столько практическую полезность, сколько попытался последовательно применить наследование так чтобы оно исключало какое бы то нибыло дублирование функционала,
для чего я кодерил, как мне кажется, структуры такими как они определены в теории. Так Стек имеет только методы push и pop и ничего более, так как это и дано в его определении.

This is just a common data structures which I code in every programming language I learn.


###List of available data structures in Javascript:
*Stack
*Queue
*List
*BinaryTree

##Stack 
Исходная структура от которой наследуются все остальные. Выполнена в виде класса, который содержит поле head указывающее на начало структуры.
В этом поле (head) хранится объект вложенного (nested) класса Node, который имеет поле value, в котором хранится значение и поле next, которое указывает на следующий обект класса Node.
Таким образом структура данных стек закоддированна в виде последовательности объектов класса Node ссылающихся друг на друга начиная с головы (head) и реализует структуру данных стек наиболее близко к определению.

##### public methods

**length()** - calculates and return length of the stack.
**pop()**	 - returns last element and delete it from the stack.
**print()**	 - outputs the stack in console.
**push()**	 - adds new element to thr stack.

##### private methods

**append()** 			- adds new element to the end of the structure.
**isEmpty()** 			- returns is the stack empty or not.
**getLastButOneNode()** - returns last but one Node of the structure.
**getLastNode()** 		- returns last Node of the structure.