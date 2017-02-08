<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ isset($title) ? $title : 'AIO' }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="/css/lib.css">
    <link href="/css/app.css" rel="stylesheet">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>

<body>
    <div id="app">
        @include("includes.topnav")
        <div id="content">
            @yield("content")
        </div>
    </div>


    <!-- Scripts -->
    <script src="/js/lib.js"></script>
    <script src="/js/app.js"></script>
</body>