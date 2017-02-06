<nav class="nav has-shadow">
    <div class="container">
        @if(!Auth::guest())
        <div class="nav-left">
            <!--a class="nav-item">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
            </a-->
            <topnav></topnav>
        </div>
        @endif
        <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
        <div class="nav-right nav-menu">
            @if (Auth::guest())
                <a class="nav-item is-tab {{ isActiveRoute('login') }}" href="{{ route('login') }}">Login</a>
                <a class="nav-item is-tab {{ isActiveRoute('register') }}" href="{{ route('register') }}">Register</a>
            @else
                <a class="nav-item is-tab" href="{{ route('logout') }}"
                   onclick="event.preventDefault();document.getElementById('logout-form').submit();"> Logout
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
            @endif

            <a class="nav-item is-tab is-hidden-tablet {{ isActiveRoute('home') }}" href="{{ route('home') }}">Home</a>
        </div>
    </div>
</nav>