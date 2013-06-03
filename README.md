
# Angular Test

Test porting a super-simple jQuery "app" to Angular.

## Reflections

* adding a trigger to series of elements in jQuery is easy. So, to add a class 'on' when an element is clicked:

`$('div legend').on('click', function() { $(this).addClass("on"); });`

  In Angular, you need to have a separate variables for each element (otherwise a click would add "on" to all the elements), and you need to bind the click event manually.


    <fieldset ng-class="{on: toggle1}"> 
        <legend ng-click="toggle1=!toggle1">
        ...
    <fieldset ng-class="{on: toggle2}"> 
        <legend ng-click="toggle2=!toggle2">
        ...

  That's a bit ugly. Is there a better way?

* using a separate json file is certainly cleaner than updating the HTML. Too bad there it's not possible to
add comments to JSON. (Although it would be possible to run it through a minifier to remove comments.)

* the js code in both cases is about the same length. The angular code seems much easier to read - 
mainly since it isn't doing any hairy DOM selections and parsing.

* the original code could benefit from some of the css optimizations here (e.g. uses two classes ("on" and "off") instead of just an "on" class.)

