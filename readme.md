# Data structures

В данной реализации типичных структур данных я преследовал не столько практическую полезность, сколько попытался последовательно применить наследование так чтобы оно исключало какое бы то нибыло дублирование функционала,
для чего я кодерил, как мне кажется, структуры такими как они определены в теории. Так стек и очередь имеют только методы push и pop и ничего более, так как это и дано в его определении.

This is just a common data structures which I code in every programming language I learn.

###### [Source code on github](https://github.com/mozg3000/datastructures)

###### [npm repository](http://)

#### To install from npm repository:

```
npm install @mozg3000/datastructures --registry http://iluka.ru:4873
```

#### To use in project;

```
import {DataStructureClassName} from '@mozg3000/datastructures';
```

#### To run tests:

```
npm run test
```


### List of available data structures in Javascript:
* Stack
* Queue
* List
* TemplateSentenceTree

## Stack (Стек)
Данная реализация структуры стека посторена на т.н. односвязном списке и выполнена в виде класса, который содержит поле head указывающее на первый элемент структуры.
Этот элемент представляет собой объект вложенного (nested) класса Node, который имеет поле value, в котором хранится целевое значение и поле next, 
которое указывает на следующий объект класса Node.
Таким образом структура данных стек закоддированна в виде последовательности объектов класса Node ссылающихся друг на друга начиная с головы (head). 

**head->Node->Node->null**

Особенностью моей реализации стека является то, что можно только добавлять новые элементы в начало структуры и забирать их от туда. 
Получается что head всегда указывает на последний добавленный элемент, а тот в свою очередь на предыдущий и т.д. до первого добавленного.
Т.к. добавляется и забирается только первый элемент, он же последний добавленный, то сложность вставки\удаления О(1).
Как мне кажется, при таком подходе, реализация стека оказывается наиболее близкой к абстракции. Последний добавленный  элемент оказывается действительно первым в структуре.


##### public methods
Method | Description
------ | -----------
**isEmpty()**| returns true if the stack is empty or false if not.
**pop()**	 | returns a head node value and remove it from the structure.
**push(value)**	 | adds new node with value = value to the stack.

##### private methods
Method | Description
------ | -----------
**_addHead(value)** | creates a head node with value = value.
**_prepend(value)** | creates new head node with value = value and joins old one to it.

## Queue (Очередь) 
Класс очереди наследуется от стека. У класса очереди так же имеется вложенный класс Node, который, в свою очередь, наследуется от вложенного в стек класса Node и имеет поле prev указывающее на предыдущий элемент.
Так же как и в стеке можно только добавлять и забирать элементы. Что так же согласуется с абстрактной очередью. Новые элементы так же добавляются в начало структуры на которую указывает head.
Однако, забираются они уже с конца структуры в котором находятся элементы добавленные первыми. 
Для увеличения скорости доступа к последнему элементу структуры в класс добавлено поле tail указывающее на последний элемент.

##### public methods
Method | Description
------ | -----------
**pop()**	 | returns tail node value and delete it from the structure.

##### private methods
Method | Description
------ | -----------
**_addHead()** | overwrites stack one
**_prepend()** | overwrites stack one

## List (Список) 
Класс списка наследуется от очереди и представляет собой реализацию двух связного списка. Никаких новый полей в класс списка уже не добавляется, однако вводится много новых методов типичных для него.

##### public methods
Method | Description
------ | -----------
**concat(list)** | concatinates two (sub)list.
**includes(value, comparator(a, b))**	 | returns true if structure contains the value. Comparator should return true if compairing value equals or false if not.
**insert(value, index)** | inserts value into list in the index position. index starts from zero.
**length()** | returns calculated length of the structure.
**pop()** | overrides stack one
**remove(value, comparator(a, b)** | removes first met value entry. Comparator should return true if compairing value equals or false if not.
**shift()** | returns a tail node value and remove it from the structure.
**unshift** | adds a tail node to the list.
**[Symbol.iterator]()** | returns iterator.

##### private methods
Method | Description
------ | -----------
**_addHead** | overwrites stack one
**_prepend()** | overwrites stack one

## TemplateSentence
Есть строка:
```
{Пожалуйста,|Просто|Если сможете,} сделайте так, 
чтобы это {удивительное|крутое|простое|важное|бесполезное} тестовое предложение 
{изменялось {быстро|мгновенно|оперативно|правильно} случайным образом|менялось каждый раз}
```         

Строка раскрывается согласно следующим правилам:
* {..|..}  значит, что допустимо одно из указанных значений, то есть {крутое|простое} значит, что выведется ТОЛЬКО крутое или ТОЛЬКО простое.
*  Вложенные фигурные скобки так же должны раскрываться, значит: {простое|очень {сложное|удачное}} в итоге получим на выходе один из трёх вариантов: "простое", "очень сложное", "очень удачное". 
* Вложенность может быть бесконечной. 

Реализован алгоритм получения всех возможных вариантов раскрытия исходной строки.

## ExpressionTree
Реализован модуль разбора математических выражений. 
Поддерживаются следующие операции:
* Сложение
* Вычитание
* Умножение
* Деление
* Унарный минус
* Скобки


## Изменения

### v. 0.2.0
* Исправлен bug с отсутсвием this у Node.

### v. 0.2.1
* Добавилен отсутствующий экспорт priorities

### v. 0.2.0
* Добавилена структура ExxpressionTree

### v. 0.1.2
*  обновлён файл Readme.md
* добавлен экспорт TemplateSentence в index.js

### v. 0.1.1
* добавлена структура TemplateSentenceTree