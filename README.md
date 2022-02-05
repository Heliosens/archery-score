# archery-score

## User story
User open app.

Target is on background

A section in front asks :

    - name or pseudo
    - choice the number of volley for the session. (10 by default or 20)

Section disappears when click the mini target link.

    IRL-> user shoot a volley of 3 arrows

User clicks on the target three time

on the third a section appears with 3 numbers and total :
    
    - values are sort from the biggest to the smallest
    - each 11 is replace by "10+"
    - total is calculate
    - array is create
        result = [["a1", "a2", "a3"], line count, number of 10+/11],
    
when user valid the section disappears 

    - values go in final array

do it for number of volley

on the last validation

    - display all values in array :
        [["a1", "a2", "a3"], line count, number of 10+/11],
        [["a1", "a2", "a3"], line count, number of 10+/11],
        [["a1", "a2", "a3"], line count, number of 10+/11],
        [result, , number of 10+/11]
        
on more validation 

    array is convert in json file load on file directory
    
