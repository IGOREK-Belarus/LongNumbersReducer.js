<h1 align="center">LongNumbersReducer.js</h1>
Library for reducing long numbers

## Supported suffixes

| Number | Name | Suffix |
| --- | --- | --- |
| 1,000 | Thousand | K |
| 1,000,000 | Million | M |
| 1,000,000,000 | Billion | B |
| 1,000,000,000,000 | Trillion | T |
| 1,000,000,000,000,000 | Quadrillion | q |
| 1,000,000,000,000,000,000 | Quintillion | Q |
| 1,000,000,000,000,000,000,000 | Sextillion | s |
| 1,000,000,000,000,000,000,000,000 | Septillion | S |
| 1,000,000,000,000,000,000,000,000,000 | Octillion | O |
| 1,000,000,000,000,000,000,000,000,000,000 | Nonillion | N |
| 1,000,000,000,000,000,000,000,000,000,000,000 | Decillion | D |

## How to use
There is a function: ``returnReducedValue(value)``, where's ``(value)`` - your number.
After calling it - It will return **string** of your value (Example: 1000 -> 1K)

## How to install
1. Download file *(/src/LongNumbersReducer.js)*
2. Move file to the project
3. Import it:
   ```javascript
   import * as LNR from "./LongNumbersReducer.js"
   ```
