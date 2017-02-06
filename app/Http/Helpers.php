<?php

/*
|--------------------------------------------------------------------------
| Detect Active Route
|--------------------------------------------------------------------------
|
| Compare given route with current route and return output if they match.
| Very useful for navigation, marking if the link is active.
|
*/
function isActiveRoute($route, $output = "is-active")
{
    if (Route::currentRouteName() == $route) return $output;
}

/*
|--------------------------------------------------------------------------
| Detect Active Routes
|--------------------------------------------------------------------------
|
| Compare given routes with current route and return output if they match.
| Very useful for navigation, marking if the link is active.
|
*/
function areActiveRoutes(Array $routes, $output = "is-active")
{
    foreach ($routes as $route)
    {
        if (Route::currentRouteName() == $route) return $output;
    }
}

function isValidationFail($errors, $value, $output = "is-danger")
{
    if ($errors->has($value)) return $output;
}